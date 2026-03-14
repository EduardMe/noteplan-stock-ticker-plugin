# Stock Ticker - NotePlan Plugin

A real-time stock ticker plugin for [NotePlan](https://noteplan.co) that displays live market data in a sidebar panel.

![Stock Ticker](https://img.shields.io/badge/NotePlan-Plugin-blue)

## Features

- **Live stock quotes** with price, change, and percentage
- **Interactive charts** with multiple time ranges (1D, 5D, 1M, 6M, YTD, 1Y, 5Y)
- **Customizable portfolio** — add and remove stocks via search
- **Market data sidebar** showing open, high, low, volume, 52-week range, and more
- **Dark and light mode** support (follows system appearance)
- **Auto-refresh** every 2 minutes
- **Persistent portfolio** — your selected stocks are saved between sessions

## Installation

1. Open NotePlan
2. Go to **Preferences > Plugins**
3. Copy the `plugin.json` and `script.js` files into a folder named `np.stockTicker` inside your NotePlan Plugins directory:
   - **macOS (iCloud):** `~/Library/Mobile Documents/iCloud~co~noteplan~NotePlan3/Documents/Plugins/np.stockTicker/`
   - **macOS (local):** `~/Library/Containers/co.noteplan.NotePlan3/Data/Library/Application Support/co.noteplan.NotePlan3/Plugins/np.stockTicker/`

## Usage

1. Open the command bar in NotePlan (Cmd+J)
2. Search for **"Stock Ticker"**
3. The plugin opens in the sidebar showing your portfolio

### Managing Stocks

- **Add a stock:** Type a company name or ticker symbol in the search bar and select from the dropdown
- **Remove a stock:** Hover over a stock chip and click the **x** button
- **Switch stocks:** Click any stock chip to view its details and chart
- **Change time range:** Use the range buttons (1D, 5D, 1M, etc.) above the chart
- **Refresh data:** Click the **Refresh** button in the header

### Default Stocks

The plugin starts with AAPL, MSFT, and GOOGL. Your portfolio is saved automatically when you add or remove stocks.

## Data Sources

- **Yahoo Finance** (primary) — quotes, charts, and company search
- **Finnhub** (fallback) — basic quote data if Yahoo is unavailable

## License

MIT
