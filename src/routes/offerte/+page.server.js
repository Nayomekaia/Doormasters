import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';

const resend = new Resend(RESEND_API_KEY);

// Kleine sanitization functie voor veiligheid
const sanitize = str =>
  str ? str.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char])) : '';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const naam = sanitize(data.get('naam'));
    const achternaam = sanitize(data.get('achternaam'));
    const email = sanitize(data.get('email'));
    const telefoon = sanitize(data.get('telefoon'));
    const adres = sanitize(data.get('adres'));
    const postcode = sanitize(data.get('postcode'));
    const plaats = sanitize(data.get('plaats'));
    const provincie = sanitize(data.get('provincie'));
    const land = sanitize(data.get('land'));
    const soortDeur = sanitize(data.get('soortDeur')) || 'Onbekend';
    const dagmaat = sanitize(data.get('dagmaat'));

    try {
      // 1️⃣ Mail naar interne inbox
      await resend.emails.send({
        from: 'Doormasters <onboarding@info.door-masters.nl>',
        to: 'info@door-masters.nl',
        subject: 'Nieuwe offerte aanvraag',
        html: `
          <p><strong>Naam:</strong> ${naam} ${achternaam}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefoon:</strong> ${telefoon}</p>
          <p><strong>Adres:</strong> ${adres}</p>
          <p><strong>Postcode:</strong> ${postcode}</p>
          <p><strong>Plaats:</strong> ${plaats}</p>
          <p><strong>Provincie:</strong> ${provincie}</p>
          <p><strong>Land:</strong> ${land}</p>
          <p><strong>Soort Deur:</strong> ${soortDeur}</p>
          <p><strong>Dagmaat:</strong> ${dagmaat}</p>
        `
      });

      // 2️⃣ Verstuur naar je webhook endpoint
      await fetch('https://door-master.nl/api/resend-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'email.received',
          data: {
            from: email,
            to: 'info@door-masters.nl',
            subject: 'Nieuwe offerte aanvraag',
            text: `Soort Deur: ${soortDeur}\nDagmaat: ${dagmaat}\nTelefoon: ${telefoon}\nEmail: ${email}`
          }
        })
      });

      // 3️⃣ Bevestigingsmail naar de klant
      await resend.emails.send({
        from: 'Doormasters <onboarding@info.door-masters.nl>',
        to: email,
        subject: 'Bevestiging: je offerte aanvraag',
        html: `
          <p>Beste ${naam},</p>
          <p>Bedankt voor je offerte aanvraag bij Doormasters! We hebben je gegevens ontvangen en nemen zo snel mogelijk contact met je op.</p>
          <p>Hier is een overzicht van je aanvraag:</p>
          <ul>
            <li>Soort Deur: ${soortDeur}</li>
            <li>Dagmaat: ${dagmaat}</li>
            <li>Telefoon: ${telefoon}</li>
            <li>Email: ${email}</li>
          </ul>
          <p>Met vriendelijke groet,<br>Team Doormasters</p>
        `
      });

      return {
        type: 'success',
        data: { message: 'Bericht succesvol verzonden! Zowel intern als naar klant.' }
      };

    } catch (err) {
      console.error('Resend error:', err);
      return {
        type: 'failure',
        data: { message: 'Er ging iets mis bij het verzenden van de mail.' }
      };
    }
  }
};