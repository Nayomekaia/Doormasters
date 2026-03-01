import { Resend } from "resend";
import { RESEND_API_KEY } from '$env/static/private';
import { fail } from "@sveltejs/kit";

const resend = new Resend(RESEND_API_KEY);
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Kleine sanitization functie
const sanitize = str =>
  str ? str.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char])) : '';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const naam = sanitize(data.get("naam"));
    const achternaam = sanitize(data.get("achternaam"));
    const telefoon = sanitize(data.get("telefoon"));
    const email = sanitize(data.get("email"));
    const adres = sanitize(data.get("adres"));
    const vraag = sanitize(data.get("vraag"));

    // Verplichte velden
    if (!naam || !achternaam || !email || !vraag) {
      return fail(400, { error: "Verplichte velden missen" });
    }

    if (!regex.test(email)) {
      return fail(400, { error: "Ongeldig e-mailadres" });
    }

    try {
      // 1️⃣ Mail naar interne inbox
      await resend.emails.send({
        from: "Doormasters <onboarding@info.door-masters.nl>",
        to: "info@door-masters.nl",
        subject: "Nieuwe contact aanvraag",
        html: `
          <p><strong>Naam:</strong> ${naam} ${achternaam}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefoon:</strong> ${telefoon}</p>
          <p><strong>Adres:</strong> ${adres}</p>
          <p><strong>Vraag:</strong><br>${vraag}</p>
        `,
      });

      // 1️⃣b Verstuur ook naar je webhook endpoint
      await fetch('https://door-master.nl/api/resend-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'email.received',
          data: {
            from: email,
            to: 'info@door-masters.nl',
            subject: 'Nieuwe contact aanvraag',
            text: vraag
          }
        })
      });

      // 2️⃣ Bevestigingsmail naar de klant
      await resend.emails.send({
        from: "Doormasters <onboarding@info.door-masters.nl>",
        to: email,
        subject: "Bevestiging: je contactaanvraag",
        html: `
          <p>Beste ${naam},</p>
          <p>Bedankt voor je contactaanvraag bij Doormasters! We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.</p>
          <p>Hier is een overzicht van je aanvraag:</p>
          <ul>
            <li>Naam: ${naam} ${achternaam}</li>
            <li>Telefoon: ${telefoon}</li>
            <li>Email: ${email}</li>
            <li>Adres: ${adres}</li>
            <li>Vraag: ${vraag}</li>
          </ul>
          <p>Met vriendelijke groet,<br>Team Doormasters</p>
        `,
      });

      return { success: true };

    } catch (error) {
      console.error("Mail error:", error);
      return fail(500, { error: "Verzenden mislukt" });
    }
  }
};