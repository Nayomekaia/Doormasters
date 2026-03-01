import { json } from "@sveltejs/kit";

let emails = [];

export const POST = async ({ request }) => {
    const event = await request.json();

    if (event.type === "email.received") {
        const email = event.data;
        console.log("📩 Nieuwe e-mail ontvangen via Resend!", email);

        emails.push({
            from: email.from,
            to: email.to,
            subject: email.subject,
            body: email.text,
            receivedAt: new Date().toISOString()
        });
    }

    return json({ status: "ok" });
};

export const GET = async () => {
    return json(emails);
};