import express from 'express';
import { StockTransaction } from '../service/transactionService';
const router = express.Router();

/**
 *
 */
router.get('/stock', (req, res) => {
  // Fetch the querystring
  let sku = req.query.sku;
  console.log(sku);
  StockTransaction(sku as string)
    .then((data) => {
      res.send(data).status(200);
    })
    .catch((e) => {
      res.send({ error: 'No SKU', message: e }).status(404);
    });
});

export default router;
