'use server';

type ReservationState = {
    success: boolean;
    message: string;
}

export async function submitReservation(prevState: ReservationState, formData: FormData): Promise<ReservationState> {
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const passport = formData.get('passport') as string;
    const contactApp = formData.get('contactApp') as string;
    const contactId = formData.get('contactId') as string;
    const date = formData.get('date') as string;
    const time = formData.get('time') as string;

    console.log('Reservation Request:', { name, phone, passport, contactApp, contactId, date, time });

    if (!name || !phone || !passport) {
        return { success: false, message: 'Please fill in all required fields.' };
    }

    // Telegram Configuration
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_IDS = [
        process.env.TELEGRAM_CHAT_ID,
        process.env.TELEGRAM_CHAT_ID2
    ].filter(Boolean); // Only keep defined IDs

    // Formatting the message
    // Use HTML to allow <code> tags for one-click copy
    const messageText = `
<b>🎰 New Reservation Received 🎰</b>

👤 <b>Name:</b> <code>${name}</code>
📞 <b>Phone:</b> <code>${phone}</code>
🛂 <b>Passport:</b> <code>${passport}</code>
💬 <b>Contact:</b> ${contactApp || 'None'} ${contactId ? `<code>${contactId}</code>` : ''}
📅 <b>Arrival:</b> ${date || 'Not set'} ${time || ''}

<i>Please arrange reception.</i>
  `;

    try {
        if (BOT_TOKEN && CHAT_IDS.length > 0) {
            const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

            // Send to all defined chat IDs in parallel
            await Promise.all(CHAT_IDS.map(async (chatId) => {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: messageText,
                        parse_mode: 'HTML',
                    }),
                });

                if (!response.ok) {
                    console.error(`Telegram API Error for ${chatId}:`, await response.text());
                }
            }));
        } else {
            console.warn('Telegram Credentials missing. Simulating success.');
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        return { success: true, message: 'Reservation submitted successfully! We will contact you shortly.' };

    } catch (error) {
        console.error('Submission error:', error);
        return { success: false, message: 'Failed to submit reservation. Please try again later.' };
    }
}
