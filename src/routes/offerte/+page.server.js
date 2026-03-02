import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';
import { fail } from '@sveltejs/kit';

const resend = new Resend(RESEND_API_KEY);

const sanitize = str =>
  str
    ? str.replace(/[&<>"']/g, char =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char])
      )
    : '';

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

    if (!naam || !achternaam || !email || !telefoon || !soortDeur || !dagmaat) {
      return fail(400, { message: 'Vul alle verplichte velden in.' });
    }

    try {
      // 📩 Mail naar jou
      await resend.emails.send({
        from: 'Door Masters <info@door-masters.nl>',
        to: 'nb@lenardandlenard.com ',
        reply_to: email,
        subject: 'Nieuwe offerte aanvraag',
        html: `
          <h2>Nieuwe offerte aanvraag</h2>
          <p><strong>Naam:</strong> ${naam} ${achternaam}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefoon:</strong> ${telefoon}</p>
          <p><strong>Adres:</strong> ${adres}</p>
          <p><strong>Postcode:</strong> ${postcode}</p>
          <p><strong>Plaats:</strong> ${plaats}</p>
          <p><strong>Provincie:</strong> ${provincie}</p>
          <p><strong>Land:</strong> ${land}</p>
          <hr />
          <p><strong>Soort Deur:</strong> ${soortDeur}</p>
          <p><strong>Dagmaat:</strong> ${dagmaat}</p>
        `
      });

      // 📧 Bevestiging naar klant
      await resend.emails.send({
        from: 'Door Masters <info@door-masters.nl>',
        to: email,
        subject: 'Bevestiging van je offerte aanvraag',
        html: `
          <p>Beste ${naam},</p>
          <p>Bedankt voor je aanvraag bij Door Masters.</p>
          <p>Wij nemen binnen 1-2 werkdagen contact met je op.</p>
          <br />
          <p><strong>Overzicht:</strong></p>
          <ul>
            <li>Soort Deur: ${soortDeur}</li>
            <li>Dagmaat: ${dagmaat}</li>
            <li>Telefoon: ${telefoon}</li>
          </ul>
          <br />
          <p>Met vriendelijke groet,<br/>Door Masters</p>
        `
      });

      return { success: true };

    } catch (err) {
      console.error('Resend error:', err);
      return fail(500, { message: 'Er ging iets mis bij het verzenden.' });
    }
  }
};