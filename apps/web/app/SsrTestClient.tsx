'use client';

import SsrTest from './SsrTest';

export type SsrTestClientProps = {
    title: string;
};

export const SsrTestClient = ({ title }: SsrTestClientProps) => {
    return (
        <div style={{ marginBottom: '32px' }}>
            <p style={{ marginBottom: '8px' }}>{title}</p>
            <SsrTest />
        </div>
    );
};
