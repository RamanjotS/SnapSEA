const stockData = [
  { ticker: 'SNAP', name: 'Snap Inc', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'MSFT', name: 'Microsoft Corporation', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'AAPL', name: 'Apple Inc', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'NVDA', name: 'NVIDIA Corporation', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'GOOG', name: 'Alphabet Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'AMZN', name: 'Amazon.com, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'META', name: 'Meta Platforms, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'BRK.B', name: 'Berkshire Hathaway Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'LLY', name: 'Eli Lilly and Company', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'AVGO', name: 'Broadcom Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'JPM', name: 'JPMorgan Chase & Co.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'V', name: 'Visa Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'TSLA', name: 'Tesla, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'WMT', name: 'Walmart Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'XOM', name: 'Exxon Mobil Corporation', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'MA', name: 'Mastercard Incorporated', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'UNH', name: 'UnitedHealth Group Incorporated', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'JNJ', name: 'Johnson & Johnson', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'PG', name: 'The Procter & Gamble Company', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'HD', name: 'The Home Depot, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'ORCL', name: 'Oracle Corporation', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'MRK', name: 'Merck & Co., Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'ABBV', name: 'AbbVie Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'COST', name: 'Costco Wholesale Corporation', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'CVX', name: 'Chevron Corporation', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'CRM', name: 'Salesforce, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'BAC', name: 'Bank of America Corporation', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'AMD', name: 'Advanced Micro Devices, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'NFLX', name: 'Netflix, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'KO', name: 'The Coca-Cola Company', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'PEP', name: 'PepsiCo, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'ADBE', name: 'Adobe Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'DIS', name: 'The Walt Disney Company', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'LIN', name: 'Linde plc', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'TMO', name: 'Thermo Fisher Scientific Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'ACN', name: 'Accenture plc', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'WFC', name: 'Wells Fargo & Company', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'MCD', name: 'McDonald\'s Corporation', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'CSCO', name: 'Cisco Systems, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'ABT', name: 'Abbott Laboratories', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'QCOM', name: 'QUALCOMM Incorporated', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'TMUS', name: 'T-Mobile US, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'CAT', name: 'Caterpillar Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'DHR', name: 'Danaher Corporation', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'VZ', name: 'Verizon Communications Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'INTU', name: 'Intuit Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'IBM', name: 'International Business Machines Corporation', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'INTC', name: 'Intel Corporation', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'AMAT', name: 'Applied Materials, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'CMCSA', name: 'Comcast Corporation', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'AXP', name: 'American Express Company', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'AXP', name: 'American Express Company', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'UBER', name: 'Uber Technologies, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'TXN', name: 'Texas Instruments Incorporated', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'NOW', name: 'ServiceNow, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'COP', name: 'ConocoPhillips', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'AMGN', name: 'Amgen Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'UNP', name: 'Union Pacific Corporation', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'LOW', name: 'Lowe\'s Companies, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'PM', name: 'Philip Morris International Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'ISRG', name: 'Intuitive Surgical, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'SPGI', name: 'S&P Global Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
  { ticker: 'MU', name: 'Micron Technology, Inc.', price: Math.random() * 3000, change: Math.random() - 0.5 },
];

const stockList = document.getElementById('stockList');
const sort = document.getElementById('dropDown');
const search = document.getElementById('search');
const addStockFormButton = document.getElementById('addStockFormButton');

function createList(stocks)
{
  stockList.innerHTML = '';

  stocks.forEach(function(stock)
  {
    const newListItem = document.createElement('li');
    const changeColor = document.createElement('text');

    newListItem.textContent = `${stock.name} (${stock.ticker}) $${stock.price.toFixed(2)} `;
    changeColor.textContent = `(${stock.change.toFixed(2)}%)`;

    if (stock.change < 0)
    {
      changeColor.style.color = 'red';
    }
    else
    {
      changeColor.style.color = 'green';
    }

    newListItem.append(changeColor);
    stockList.append(newListItem);
  });
}

function applySort(sortOption)
{
  switch(sortOption)
  {
    case 'nameAZ':
      createList(stockData.toSorted((a, b) => a.name.localeCompare(b.name)));
      break;
    case 'nameZA':
    createList(stockData.toSorted((a, b) => b.name.localeCompare(a.name)));
      break;
    case 'priceAsc':
      createList(stockData.toSorted((a, b) => a.price - b.price));
      break;
    case 'priceDesc':
      createList(stockData.toSorted((a, b) => b.price - a.price));
      break;
    default:
      createList(stockData);
  }
}

function searchList(search)
{
  const searchTerm = search.value.toLowerCase();
  const filteredStocks = stockData.filter(stock => stock.name.toLowerCase().includes(searchTerm) || stock.ticker.toLowerCase().includes(searchTerm));

  createList(filteredStocks);
}

function changeVisability()
{
  const addStockForm = document.getElementById('addStockForm');
  if (addStockForm.style.display == 'none')
  {
    addStockForm.style.display = 'block';
  }
  else if (addStockForm.style.display == 'block')
  {
    addStockForm.style.display = 'none';
  }
}

function addStock()
{
  const tickerInput = document.getElementById('newTicker').value;
  const nameInput = document.getElementById('newName').value;
  const priceInput = parseFloat(document.getElementById('newPrice').value);
  const changeInput = parseFloat(document.getElementById('newChange').value);

  if (!tickerInput || !nameInput || isNaN(priceInput) || isNaN(changeInput))
  {
    alert(`Invalid input. Please provide valid data.`);
    return;
  }

  //Only checks for ticker b/c stocks can have the same name but must have different tickers
  const existingStock = stockData.find(stock => stock.ticker == tickerInput);

  if (existingStock)
  {
    alert(`Stock ${nameInput} (${tickerInput}) is already being displayed.`);
    return;
  }

  stockData.push({ticker: tickerInput, name: nameInput, price: priceInput, change: changeInput});
  createList(stockData);

  document.getElementById('newTicker').value = '';
  document.getElementById('newName').value = '';
  document.getElementById('newPrice').value = '';
  document.getElementById('newChange').value = '';

  document.getElementById('addStockForm').style.display = 'none';
}

sort.addEventListener('change', () => applySort(sort.value));
search.addEventListener('input', () => searchList(search));
addStockFormButton.addEventListener('click', () => changeVisability());
document.getElementById('submitButton').addEventListener('click', () => addStock());

createList(stockData);
