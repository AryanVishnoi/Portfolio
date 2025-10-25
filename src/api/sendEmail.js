// api/sendEmail.js
import emailjs from '@emailjs/node';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { first_name, last_name, email, phone, message } = req.body;

        try {
            await emailjs.send(
                process.env.EMAILJS_SERVICE_ID,
                process.env.EMAILJS_TEMPLATE_ID, {
                    first_name,
                    last_name,
                    email,
                    phone,
                    message,
                },
                process.env.EMAILJS_PUBLIC_KEY
            );

            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}