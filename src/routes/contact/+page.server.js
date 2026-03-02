import { Resend } from "resend";
import { RESEND_API_KEY } from "$env/static/private";
import { fail } from "@sveltejs/kit";

const resend = new Resend(RESEND_API_KEY);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const naam = data.get("naam")?.trim();
    const achternaam = data.get("achternaam")?.trim();
    const telefoon = data.get("telefoon")?.trim();
    const email = data.get("email")?.trim();
    const adres = data.get("adres")?.trim();
    const vraag = data.get("vraag")?.trim();

    if (!naam || !achternaam || !email || !vraag) {
      return fail(400, { error: "Vul alle verplichte velden in." });
    }

    if (!emailRegex.test(email)) {
      return fail(400, { error: "Ongeldig e-mailadres." });
    }

    try {

      await resend.emails.send({
        from: "DOORMASTERS BV <info@mail.door-masters.nl>",
        to: "info@door-masters.nl",
        reply_to: email,
        subject: `Nieuwe aanvraag van ${naam}`,
        html: `
          <h2>Nieuwe contactaanvraag</h2>
          <p><strong>Naam:</strong> ${naam} ${achternaam}</p>
          <p><strong>Telefoon:</strong> ${telefoon || "Niet ingevuld"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Adres:</strong> ${adres || "Niet ingevuld"}</p>
          <hr />
          <p><strong>Vraag:</strong></p>
          <p>${vraag.replace(/\n/g, "<br>")}</p>
        `,
      });

  
      await resend.emails.send({
        from: "DOORMASTERS BV <info@mail.door-masters.nl>",
        to: email,
        subject: "Wij hebben je aanvraag ontvangen",
        html: `
          <h2>Bedankt voor je aanvraag, ${naam}</h2>
          <p>We hebben je bericht goed ontvangen en nemen zo snel mogelijk contact met je op.</p>
          <br />
          <p><strong>Je bericht:</strong></p>
          <p>${vraag.replace(/\n/g, "<br>")}</p>
          <br />
          <p>Met vriendelijke groet,</p>
          <p><strong>DOORMASTERS BV</strong></p>
        `,
      });

      return { success: true };

    } catch (error) {
      console.error("Resend error:", error);
      return fail(500, { error: "Er ging iets mis bij het verzenden." });
    }
  }
};