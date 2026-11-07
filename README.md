# Din Elektriker Syd AB

Statisk företagswebbplats med Next.js App Router, TypeScript och Tailwind CSS.

## Lokal utveckling

Använd Node.js 24. Kör i projektmappen med PowerShell:

```powershell
npm.cmd ci
npm.cmd run dev
```

Öppna http://localhost:3000 eller adressen i terminalen.

## Innehåll

- `app/data/company.ts` innehåller kontaktuppgifter, organisationsnummer, domän och navigation. Ange telefon med landsnummer. Tomma kontaktfält visar platshållare. När uppgifterna fylls i aktiveras telefon- och e-postlänkar vid nästa bygge.
- `app/data/services.ts` innehåller tjänsternas texter och ankare.
- `app/data/projects.ts` innehåller godkända referensprojekt. Startsidan visar upp till tre. Projektsidan visar alla.
- `app/data/seo.ts` skapar sidmetadata. Den bekräftade domänen används för canonical, delningsbilder och sitemap. När domänen saknas används Cloudflares byggvariabel `CF_PAGES_URL` om den finns. Utan någon känd URL saknar sitemap poster.
- `app/page.tsx` är startsidan. Undersidorna ligger i kataloger under `app/`. Gemensamma komponenter finns i `app/components/`.

## Bilder

`public/logotyp.png` är företagets original. Fotografiet [Elcentral](https://commons.wikimedia.org/wiki/File:Elcentral.jpg) av Hulda Mellgren är frigivet till public domain. [Modern Kitchen](https://commons.wikimedia.org/wiki/File:Modern_Kitchen.jpg) av Pbroks13 används under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Bilderna har beskurits, skalats och konverterats till WebP. Köksbildens bearbetning har samma licens.

## Kontroll och statisk export

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
```

Cloudflare Pages kan använda byggkommandot `npm run build` och katalogen `out`. Publik hosting kräver endast de exporterade filerna.
