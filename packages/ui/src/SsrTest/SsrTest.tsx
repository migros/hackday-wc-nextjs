'use client';

import { render, html, RenderResultReadable } from 'wc-ssr-test';

export default function SsrTest() {
    import('wc-ssr-test/WcSsrTest.js');
    const name = 'wc-ssr-test';
    const out = new RenderResultReadable(render(html`<wc-ssr-test name=${name}>${name}</wc-ssr-test>`));
    const data = Buffer.from(out.read());
    return (
        <div>
            <h1>SSR Test</h1>
            <div dangerouslySetInnerHTML={{ __html: data.toString() }}></div>
        </div>
    );
}
