import { EmailTemplate } from '@/components/email/email-template';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        const resend = new Resend(process.env.RESEND_API_KEY);
        const toEmail = process.env.CONTACT_TO_EMAIL || 'keweizhan7@gmail.com';

        const { data, error } = await resend.emails.send({
            from: 'Kewei Zhan Portfolio <onboarding@resend.dev>',
            to: [toEmail],
            replyTo: email,
            subject: `New message from ${name}`,
            react: EmailTemplate({ name, email, message }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ success: true, data });
    } catch {
        return Response.json({ error: 'Internal server error' }, { status: 500 });
    }
}
