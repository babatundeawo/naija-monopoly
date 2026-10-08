# Customizing the site

Open any file on GitHub, select the pencil icon, edit, and follow the steps in [DEPLOYMENT.md](DEPLOYMENT.md) to publish.

## Colours

`src/css/tokens.css`. Each colour is written as `light-dark(light value, dark value)`. Change the first value for light mode and the second for dark mode. The main ones:

- `--green`: primary brand colour
- `--gold-fill`: accent colour
- `--bg`, `--surface`, `--text`: page background, cards and text

Board colour groups (`--brown`, `--lightblue` and so on) are at the bottom of the same file.

## Text

All page text is in `src/index.html`: the headline, feature cards, neighbourhood cards and rules. The game's messages and cards are in `src/js/data.js` (card text) and `src/js/engine.js` (log messages).

## Board names, prices and cards

`src/js/data.js`, in the `TILES`, `CHANCE_CARDS` and `CHEST_CARDS` lists. Rents are calculated from each property's price. If you change prices, update the matching text in `src/index.html`.

## Fonts

The fonts are chosen in two places: the Google Fonts `<link>` in `src/index.html` (and `src/404.html`), and `--font-display` and `--font-body` in `src/css/tokens.css`. Replace the family names in both. To host fonts yourself, upload the font files to `src/assets/fonts/` and add `@font-face` rules to `src/css/base.css`, then remove the Google Fonts links and the `fonts.googleapis.com` and `fonts.gstatic.com` entries in the page's Content Security Policy.

## Images and icons

Logo, favicons and the social preview image are in `src/assets/`. Replace them with files of the same name and size: `favicon.svg`, `favicon-32.png` (32 px), `apple-touch-icon.png` (180 px), `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` and `og-image.png` (1200 × 630). The header logo is the inline SVG at the top of `src/index.html`. `icon.png` in the repository root (256 px) is the Windows app icon.

## Screenshots in the README

`docs/assets/preview-home.png` and `preview-game.png`. Replace them with fresh screenshots of the live site whenever the look changes.
