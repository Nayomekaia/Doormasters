import { Resend } from "resend";
import { RESEND_API_KEY } from '$env/static/private';
import { fail } from "@sveltejs/kit";

const resend = new Resend(RESEND_API_KEY);

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const naam = data.get("naam");
    const achternaam = data.get("achternaam");
    const telefoon = data.get("telefoon");
    const email = data.get("email");
    const adres = data.get("adres");
    const vraag = data.get("vraag");

    if (!naam || !achternaam || !email || !vraag) {
      return fail(400, { error: "Verplichte velden missen" });
    }

    if (!regex.test(email)) {
      return fail(400, { error: "Ongeldig e-mailadres" });
    }

    try {
      await resend.emails.send({
        from: "Doormasters <onboarding@resend.dev>",
        to: "info@door-masters.nl", 
        subject: "Nieuwe contact aanvraag",
        text: `
Naam: ${naam} ${achternaam}
Telefoon: ${telefoon}
Email: ${email}
Adres: ${adres}

Vraag:
${vraag}
        `,
      });

      return { success: true };

    } catch (error) {
      console.error("Mail error:", error);
      return fail(500, { error: "Verzenden mislukt" });
    }
  }
};
