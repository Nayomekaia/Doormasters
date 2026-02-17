import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';
import { fail } from '@sveltejs/kit';

const resend = new Resend(RESEND_API_KEY);

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const naam = data.get('naam');
		const achternaam = data.get('achternaam');
		const email = data.get('email');
		const telefoon = data.get('telefoon');
		const adres = data.get('adres');
		const adres2 = data.get('adres2') ?? '';
		const plaats = data.get('plaats');
		const staat = data.get('staat');
		const postcode = data.get('postcode');
		const land = data.get('land');
		const soortDeur = data.get('soortDeur') ?? 'Onbekend';

		try {
			await resend.emails.send({
				from: 'Doormasters <onboarding@resend.dev>',
				to: 'nayomedoelwijt@gmail.com', // zet hier jouw email
				subject: 'Nieuwe offerte aanvraag',
				html: `
					<p><strong>Naam:</strong> ${naam} ${achternaam}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Telefoon:</strong> ${telefoon}</p>
					<p><strong>Adres:</strong> ${adres} ${adres2}</p>
					<p><strong>Plaats:</strong> ${plaats}</p>
					<p><strong>Staat/Regio:</strong> ${staat}</p>
					<p><strong>Postcode:</strong> ${postcode}</p>
					<p><strong>Land:</strong> ${land}</p>
					<p><strong>Soort Deur:</strong> ${soortDeur}</p>
				`
			});

			return { success: true };
		} catch (err) {
			console.error('Resend error:', err);
			return fail(500, { error: 'Er ging iets mis bij het verzenden van de mail.' });
		}
	}
};
