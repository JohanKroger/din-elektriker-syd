# Din Elektriker Syd AB

Responsiv testsida med Next.js App Router, TypeScript och Tailwind CSS.

## Starta lokalt

Använd Node.js 24 och npm. Kör i projektmappen:

```sh
npm ci
npm run dev
```

Öppna http://localhost:3000 (eller adressen som terminalen visar). Startsidan finns i `app/page.tsx`.

## Kontrollera och bygg

```sh
npm run typecheck
npm run lint
npm run build
```

Next.js exporterar sidor och resurser till `out/`. För Cloudflare Pages är byggkommandot `npm run build` och publiceringsmappen `out`. Startsidan finns i `out/index.html`.
