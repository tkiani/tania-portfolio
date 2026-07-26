# Tania Kayani — Fashion Portfolio

A professional, editorial portfolio website for fashion designer & content creator
**Tania Kayani**. Built as a fast, dependency-free static site (HTML, CSS, vanilla JS)
so it can be opened directly or hosted anywhere.

## View it

- **Quick preview:** double-click `index.html` (opens in your browser).
- **Local server (recommended):** any static server, e.g. with Node installed:
  ```powershell
  npx serve .
  ```
  then open the printed `http://localhost:...` address.

## Structure

```
index.html          Home — hero, about, collections grid, content-creator feature, contact
collection.html     Reusable collection detail page (driven by ?c=<slug>)
css/style.css        All styling (editorial, responsive, lightbox, animations)
js/images.js         Auto-generated list of image files per folder
js/data.js           Collection titles, categories & written narratives
js/main.js           Rendering, navigation, scroll reveals, lightbox
```

Collection imagery stays in the original folders (e.g. `1 - Spoils of War - Aftermath/`).

## Collections included

Spoils of War · Marine Life · New Romantic · Asian Embroidery (Gulnaaz, Mah-e-Kamil,
Mirha, Zeenia) · Pakistani Heritage · Print Collection · Textiles · Content Creation.

## Personalise before sharing

Open `js/data.js` and update the `designer` block:

- `email` — currently a placeholder (`tania.kayani@example.com`).
- `social` — replace the `#` URLs with real Instagram / LinkedIn / Behance links.

Written statements per collection can be edited in the same file to match your exact
concepts. To add or remove images, drop files in the relevant folder and regenerate
`js/images.js` (or edit it directly).

## Adding a new collection

1. Add the image folder.
2. Add its filenames to `js/images.js`.
3. Add a new entry to the `collections` array in `js/data.js`.
