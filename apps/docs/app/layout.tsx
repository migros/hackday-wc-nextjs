import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hackday WC NextJS',
    description: 'Generated on Hackday 5.2.202',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
