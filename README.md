# Stock Ticker - NotePlan Plugin

A real-time stock ticker plugin for [NotePlan](https://noteplan.co) that displays live market data in a sidebar panel.

![Stock Ticker](https://img.shields.io/badge/NotePlan-Plugin-blue)

## Features

- **Live stock quotes** with price, change, and percentage
- **Interactive charts** with multiple time ranges (1D, 5D, 1M, 6M, YTD, 1Y, 5Y)
- **Range-aware price changes** — change values update to reflect the selected time range
- **Customizable portfolio** — add and remove stocks via search
- **Market data sidebar** showing open, high, low, volume, 52-week range, and more
- **NotePlan theme integration** — automatically matches your current NotePlan theme
- **Auto-refresh** every 2 minutes
- **Persistent portfolio** — your selected stocks are saved between sessions

## Installation

1. Open NotePlan
2. Go to **Settings > Plugins**
3. Search for **"Stock Ticker"**
4. Click **Install**

## Usage

Once installed, open the Stock Ticker from the left sidebar. It will load with a default portfolio of AAPL, MSFT, and GOOGL.

### Managing Stocks

- **Add a stock:** Type a company name or ticker symbol in the search bar and select from the dropdown
- **Remove a stock:** Hover over a stock chip and click the **x** button
- **Switch stocks:** Click any stock chip to view its details and chart
- **Change time range:** Use the range buttons (1D, 5D, 1M, etc.) above the chart

Your portfolio is saved automatically when you add or remove stocks.

## Data Sources

- **Yahoo Finance** (primary) — quotes, charts, and company search
- **Finnhub** (fallback) — basic quote data if Yahoo is unavailable

## License

MIT
