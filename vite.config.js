import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';

// Re-use the exact production headers from vercel.json in `vite preview`,
// so the strict Content-Security-Policy can be tested locally before deploying.
const vercel = JSON.parse(readFileSync(new URL('./vercel.json', import.meta.url), 'utf8'));
const prodHeaders = Object.fromEntries(
  vercel.headers.find((h) => h.source === '/(.*)').headers
    .filter((h) => h.key !== 'Strict-Transport-Security' && !h.value.includes('upgrade-insecure-requests'))
    .map((h) => [h.key, h.value]),
);
// Same CSP minus upgrade-insecure-requests (localhost is plain http).
const csp = vercel.headers.find((h) => h.source === '/(.*)').headers.find((h) => h.key === 'Content-Security-Policy');
prodHeaders['Content-Security-Policy'] = csp.value.replace('; upgrade-insecure-requests', '');

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2019',
    sourcemap: false, // don't ship source maps to production
    assetsInlineLimit: 0, // keep every asset as a real file (CSP-friendly, cacheable)
  },
  preview: {
    headers: prodHeaders,
  },
});
