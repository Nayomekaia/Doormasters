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

      // 📩 1️⃣ Mail naar jou
      await resend.emails.send({
      from: "Door Masters <info@mail.door-masters.nl>",
        to: "gd@door-masters.nl",
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

      // 📧 2️⃣ Bevestiging naar klant
      await resend.emails.send({
        from: "Door Masters <info@door-masters.nl>",
        to: email,
        subject: "Wij hebben uw aanvraag ontvangen",
        html: `
          <h2>Bedankt voor uw aanvraag, ${naam} 👋</h2>
          <p>Wij hebben uw bericht goed ontvangen en nemen zo snel mogelijk contact met u op.</p>
          <br />
          <p><strong>Uw bericht:</strong></p>
          <p>${vraag.replace(/\n/g, "<br>")}</p>
          <br />
          <p>Met vriendelijke groet,</p>
          <p><strong>Door Masters</strong></p>
        `,
      });

      return { success: true };

    } catch (error) {
      console.error("Resend error:", error);
      return fail(500, { error: "Er ging iets mis bij het verzenden." });
    }
  }
};