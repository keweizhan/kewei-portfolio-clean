import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export function EmailTemplate({
    name,
    email,
    message,
}: Readonly<EmailTemplateProps>): React.JSX.Element {
    return (
        <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #eee' }}>
            <h2>New message from your portfolio</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <div style={{ marginTop: '20px', padding: '15px', background: '#f9f9f9' }}>
                <strong>Message:</strong>
                <p>{message}</p>
            </div>
        </div>
    );
}
