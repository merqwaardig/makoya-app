#!/usr/bin/env node
/**
 * Post-build script: adds PWA assets and meta tags to the Expo web export.
 *
 * Runs after `expo export --platform web`. Copies favo.png as the various
 * icon files mobile browsers and home-screen installers expect, writes a
 * minimal manifest.json, and injects the matching <link>/<meta> tags into
 * dist/index.html.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const FAVO = path.join(ROOT, 'assets', 'favo.png');

if (!fs.existsSync(DIST)) {
  console.error('[post-build] dist/ not found — run expo export first.');
  process.exit(1);
}
if (!fs.existsSync(FAVO)) {
  console.error('[post-build] assets/favo.png not found.');
  process.exit(1);
}

// 1. Copy favo.png under the names mobile expects.
const copies = [
  'apple-touch-icon.png',
  'apple-touch-icon-precomposed.png',
  'icon-192.png',
  'icon-512.png',
  'favicon-32.png',
];
for (const name of copies) {
  fs.copyFileSync(FAVO, path.join(DIST, name));
}

// 2. Write a minimal PWA manifest.
const manifest = {
  name: 'Makoya',
  short_name: 'Makoya',
  description: 'Makoya — be fully present to the moment',
  start_url: '/',
  display: 'standalone',
  background_color: '#FFFFFF',
  theme_color: '#FFFFFF',
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
  ],
};
fs.writeFileSync(
  path.join(DIST, 'manifest.json'),
  JSON.stringify(manifest, null, 2) + '\n'
);

// 3. Inject meta + link tags into dist/index.html.
const indexPath = path.join(DIST, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const inject = [
  '<link rel="apple-touch-icon" href="/apple-touch-icon.png" />',
  '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />',
  '<link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />',
  '<link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />',
  '<link rel="manifest" href="/manifest.json" />',
  '<meta name="theme-color" content="#FFFFFF" />',
  '<meta name="apple-mobile-web-app-capable" content="yes" />',
  '<meta name="apple-mobile-web-app-title" content="Makoya" />',
  '<meta name="apple-mobile-web-app-status-bar-style" content="default" />',
  '<meta name="mobile-web-app-capable" content="yes" />',
].join('\n    ');

// Drop the default <link rel="icon" href="/favicon.ico" /> first so it
// doesn't compete with the explicit PNG icons.
html = html.replace(
  /\s*<link rel="icon" href="\/favicon\.ico"\s*\/?>\s*/i,
  '\n    '
);
html = html.replace('</head>', `    ${inject}\n  </head>`);

fs.writeFileSync(indexPath, html);

console.log('[post-build] Injected PWA assets and meta tags into dist/');
