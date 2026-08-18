# 🇳🇬 Naija Monopoly — Wealth Wahala Edition

A Nigerian-themed Monopoly game, built to the full official rule set, playable in a browser or as a Windows desktop app.

- Properties: Yaba, Ajegunle, Ikoyi, Banana Island, Wuse, Garki, Maitama, GRA Enugu, Sabon Gari Kano, GRA Port Harcourt, and more.
- Railroads → Lagos / Ibadan / Kano / Port Harcourt Railway stations.
- Utilities → NEPA Power Co. and NITEL Water Board.
- Chance → "Aza Chance". Community Chest → "Ileya Chest".
- Currency in ₦ (Naira). Jail → "Kirikiri Prison".
- 2–4 players, mix of Human and Computer opponents, each with a Nigerian-flavored token (Danfo Bus, Okada, Jollof Pot, Talking Drum, and more).

## Full official rules implemented
- ₦1,500 starting cash, ₦200 for passing/landing on GO.
- Decline to buy → the property is **auctioned** to all players (including you).
- **Houses & hotels**: must own a complete, unmortgaged color group; building is enforced evenly across the group; the bank only has 32 houses and 12 hotels to allocate, same as the physical game.
- **Mortgage / unmortgage**: mortgage any property with no houses for half its price; pay it off anytime for the mortgage value plus 10% interest.
- **Player-to-player trading**: propose property-for-property and/or cash trades with any opponent on your turn.
- **Income Tax** gives you the classic choice of a flat ₦200 or 10% of your net worth; **Luxury Tax** is a flat ₦100.
- **Chance/Community Chest** include the classic "advance to nearest railroad" (double rent) and "advance to nearest utility" (10× dice) cards, plus Nigerian-flavored flavor text.
- **Jail**: enter via the card, the "Go To Jail" tile, or 3 doubles in a row. Get out by rolling doubles, paying ₦50 bail, using a Get-Out-of-Jail-Free card, or after 3 failed attempts (auto-pays ₦50).
- **Free Parking** pays out nothing — the official rule, not the popular house-rule jackpot.
- **Bankruptcy**: houses are auto-sold and properties auto-mortgaged to try to cover a debt before a player is declared out; last player standing wins.

## Polish & feel
- Animated dice roll (rolling flicker before settling on real values) with real dot-pip faces.
- Tokens hop tile-by-tile around the board with a little bounce when they land.
- Floating "+₦/ −₦" popups and a color flash whenever anyone's cash changes.
- Houses/hotels pop onto the board with a little animation as you build; a Nigerian flag-striped frame surrounds the whole board.
- Lightweight sound effects (dice, cash gain/loss, buying, bankruptcy, victory fanfare) — all synthesized in-browser, no audio files, and mutable with one click.
- Confetti + fanfare on the winning screen.
- In-app "📜 Rules" button for a full reference at any time, and a "🔄 New Game" button to restart without reloading manually.

## Play instantly in a browser (easiest)

Just open `index.html` in any browser — no install needed.

### Host it on GitHub Pages
1. Push this folder to a GitHub repo.
2. Go to **Settings → Pages**, set source to your `main` branch (root).
3. Your game will be live at `https://<your-username>.github.io/<repo-name>/`.

## Get a Windows `.exe` (desktop app)

This project is wrapped in [Electron](https://www.electronjs.org/) so it can run as a real Windows program with its own icon and window.

### Option A — Let GitHub build it for you (recommended)
1. Push this repo to GitHub (the `.github/workflows/build-windows.yml` file is already included).
2. GitHub Actions will automatically build a Windows `.exe` on every push to `main` (or trigger it manually from the **Actions** tab → "Build Windows EXE" → "Run workflow").
3. Once it finishes, open the workflow run and download the `NaijaMonopoly-Windows` artifact — it contains an installer (`.exe`) and a portable `.exe` that needs no installation.

This works even though you're not on Windows yourself — GitHub's build server *is* Windows, so the `.exe` it produces is fully genuine and safe.

### Option B — Build it yourself on a Windows PC
1. Install [Node.js](https://nodejs.org/) (LTS version).
2. Open a terminal in this folder and run:
   ```
   npm install
   npm run dist
   ```
3. Your `.exe` files will appear in the `dist/` folder (a NSIS installer and a portable version).

### Option C — Just run it as an app without packaging
```
npm install
npm start
```
This opens the game in its own desktop window using Electron, without producing an `.exe` file.

## Project structure
```
index.html   → the entire game (board, rules, UI) — works standalone in any browser
main.js      → Electron wrapper that opens index.html in a desktop window
package.json → Electron + electron-builder config (produces the Windows .exe)
icon.png     → app icon
.github/workflows/build-windows.yml → auto-builds the .exe on GitHub
```

## Rules summary
- Roll dice, move around the board, buy unowned properties or pay rent on owned ones.
- Own every property in a color group to build houses/hotels (up to 5 levels) and charge higher rent.
- Landing on **Aza Chance** or **Ileya Chest** draws a random Nigerian-flavoured event card.
- Get sent to **Kirikiri Prison** by the "Go To Jail" tile, 3 doubles in a row, or a card. Escape by rolling doubles, paying ₦50 bail, or waiting 3 turns.
- Run out of cash and unmortgageable property → you're bankrupt and out. Last player standing wins!

This is a fan-made, unofficial parody game for personal/educational use — not affiliated with or endorsed by Hasbro.
