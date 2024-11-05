

import Link from 'next/link';

const WhatsAppButton = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE; // Use NEXT_PUBLIC_ prefix to expose it to the client
    const message = 'Hello! I would like to chat.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Link href={whatsappUrl} passHref>
            <button style={{ padding: '10px 20px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Chat on WhatsApp
            </button>
        </Link>
    );
};

export default WhatsAppButton;

