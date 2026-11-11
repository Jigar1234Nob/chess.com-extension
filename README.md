# Chess.com Embedder

A lightweight browser extension that turns your new-tab page into a Chess.com launchpad.

## Features

- Replaces the default new-tab page with a Chess.com-themed dashboard.
- Provides quick links to Play, Puzzles, Learn, and Analysis.
- Attempts to show Chess.com in an embedded frame where the website permits it.
- Provides a direct full-tab fallback because Chess.com may restrict third-party iframe embedding.
- Toolbar popup for opening Chess.com or the dashboard.
- No analytics, tracking, account access, or data collection.
- Manifest V3 configuration for Chromium browsers and Firefox.

## Browser support

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

## Install for testing

### Chrome
1. Download or clone this repository.
2. Open `chrome://extensions`.
3. Enable **Developer mode**.
4. Select **Load unpacked**.
5. Choose this repository folder.

### Microsoft Edge
1. Open `edge://extensions`.
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose this repository folder.

### Firefox
1. Open `about:debugging#/runtime/this-firefox`.
2. Select **Load Temporary Add-on…**.
3. Choose the `manifest.json` file in this repository.

Temporary Firefox add-ons are removed when Firefox closes. A permanent Firefox release requires signing through Mozilla Add-ons.

## About the embedded view

The dashboard attempts to display Chess.com in an iframe. Chess.com controls whether its pages can be framed by other sites. If its Content Security Policy or frame restrictions block the frame, use **Open in a tab**. The extension deliberately does not attempt to bypass those protections.

## Project structure

- `manifest.json` - cross-browser Manifest V3 configuration
- `newtab.html` - dashboard and embedded view
- `popup.html` / `popup.js` - toolbar popup
- `styles.css` - shared styling

## Privacy

The extension requests no special permissions and does not collect, transmit, or store personal information. Links to Chess.com open the official website.

## License

MIT
