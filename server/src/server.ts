import express from 'express';
import { StockTransaction } from './service/transactionService';

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  let sku = req.query.sku;
  console.log(sku);
  StockTransaction(sku as string)
    .then((data) => {
      res.send(data).status(200);
    })
    .catch((e) => {
      res.send({ error: 'No SKU', message: e }).status(400);
    });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
