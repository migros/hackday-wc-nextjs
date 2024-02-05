import './globals.css';
import type { Metadata } from 'next';

import { SsrTestClient } from './SsrTestClient';

export const metadata: Metadata = {
    title: 'Hackday WC NextJS',
    description: 'Generated on Hackday 5.2.202',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html lang="en">
            <body>
                <SsrTestClient title="Render SSR Component in Root Layout (Server Component) " />
                {children}
            </body>
        </html>
    );
}
