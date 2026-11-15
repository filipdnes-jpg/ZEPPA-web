# ZEPPA – web

Statický web firmy ZEPPA (elektroinštalácie, slaboprúd).

- `public/index.html` – celý web (landing page + podstránka Projekty na `#projekty`)
- `public/img/` – obrázky (dlhodobo cachované)
- `public/robots.txt`, `public/sitemap.xml` – pre vyhľadávače
- `public/og-image.jpg`, favicony – náhľad pri zdieľaní a ikonky
- `vercel.json` – Vercel nasadzuje priečinok `public` bez buildu

Pri presune na vlastnú doménu zmeňte `https://zeppa-web.vercel.app` na novú adresu
v `public/index.html` (canonical, og:url, og:image, JSON-LD), `robots.txt` a `sitemap.xml`.

Predchádzajúca verzia webu (Lovable / TanStack Start) je dostupná v histórii gitu.
