import express from 'express';
import { getStocks } from '../data/stocks';
import { StockTransaction } from '../service/transactionService';
const router = express.Router();

/**
 * @route GET /stock
 * @desc get the remaining stocks after transaction
 * @access public
 * @querystring sku
 * @return json response of type IStock
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

/**
 * @route GET /getAllStocks
 * @desc gives all the initial stocks
 * @access public
 * @return list of all stocks
 */
router.get('/getAllStocks', (req, res) => {
  res.send(getStocks());
});

export default router;
