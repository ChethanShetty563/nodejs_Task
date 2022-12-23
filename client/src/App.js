import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './App.css';

const style = {
  width: '100%',
  // maxWidth: 360,
  bgcolor: 'background.paper',
};

function App() {
  const [stocks, setStocks] = useState([]);
  const [transactedStock, setTransactedStock] = useState({});

  const handleTransaction = (e, sku) => {
    console.log(sku);
    const url2 = `http://localhost:3002/stock?sku=${sku}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url2);
        const json = await response.json();

        setTransactedStock(json);
        console.log(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  };

  useEffect(() => {
    const url = 'http://localhost:3002/getAllStocks';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setStocks(json);
        console.log(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <div className="stock">
        <div className="stockTransaction">
          {transactedStock.sku ? (
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem>
                <h2>Stock SKU : {transactedStock.sku}</h2>
              </ListItem>
              <ListItem>
                <h2>Stock Remaining Qty: {transactedStock.stock}</h2>
              </ListItem>
            </List>
          ) : (
            <h1>Select the stock to see the remaining quantity after transaction</h1>
          )}
        </div>
      </div>
      <div className="list">
        <List sx={style} component="nav" aria-label="mailbox folders">
          {stocks.map((stock, index) => {
            return (
              <ListItem button divider onClick={(e) => handleTransaction(e, stock.sku)} key={index}>
                <ListItemText primary={stock.sku} />
                <ListItemText primary={stock.stock} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}

export default App;
