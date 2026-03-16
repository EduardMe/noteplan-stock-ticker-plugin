// Auto-generated shim for backward compatibility with NotePlan < 3.21
// Do not edit — modify index.html instead
globalThis.StockTicker = async function() {
  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="header">
  <div>

    <div class="subtitle" id="status"><span class="status-dot closed"></span>Loading...</div>
  </div>
</div>
<div class="toolbar">
  <div id="chips" class="chips"></div>
  <div class="add-stock-bar">
    <input type="text" id="addStockInput" class="stock-input" placeholder="Search company or ticker..." oninput="onSearchInput()" onkeydown="onSearchKeydown(event)" autocomplete="off">
    <div id="searchDropdown" class="search-dropdown"></div>
  </div>
</div>
<div id="detail" style="flex:1;display:flex;flex-direction:column"><div class="loading" id="initialPlaceholder"></div></div>
<div id="debug" class="debug"></div>

<script src="app.js"></script>
</body>
</html>
`;
  await HTMLView.showInMainWindow(html, "Stock Ticker", {"id":"main:np.stockTicker:Stock Ticker","icon":"chart-line"});
};
