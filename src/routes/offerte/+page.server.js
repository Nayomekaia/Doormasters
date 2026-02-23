import 'dotenv/config';
import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';

const resend = new Resend(RESEND_API_KEY);

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const naam = data.get('naam');
		const achternaam = data.get('achternaam');
		const email = data.get('email');
		const telefoon = data.get('telefoon');
		const adres = data.get('adres');
		const soortDeur = data.get('soortDeur') ?? 'Onbekend';

		try {
			await resend.emails.send({
				from: 'Doormasters <onboarding@resend.dev>',
				to: 'nayomedoelwijt@gmail.com',
				subject: 'Nieuwe offerte aanvraag',
				html: `
					<p><strong>Naam:</strong> ${naam} ${achternaam}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Telefoon:</strong> ${telefoon}</p>
					<p><strong>Adres:</strong> ${adres}</p>
					<p><strong>Soort Deur:</strong> ${soortDeur}</p>
				`
			});

			return { type: 'success', data: { message: 'Bericht succesvol verzonden!' } };
		} catch (err) {
			console.error('Resend error:', err);
			return { type: 'failure', data: { message: 'Er ging iets mis bij het verzenden van de mail.' } };
		}
	}
};