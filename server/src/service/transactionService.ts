import { getStocksBySKU } from '../data/stocks';
import { IStock } from 'src/interface/iStock';
import { getTransactionsBySKU } from '../data/transactions';
import { TransactionType } from '../enum/transactionType';

/**
 *
 * @param sku The unique id for the stock
 * @returns object which contains the sku and quantity of stock after transaction
 */
export function StockTransaction(sku: string): Promise<IStock> {
  let initialStock = getStocksBySKU(sku);
  let transactionStock = getTransactionsBySKU(sku);

  if (!initialStock && transactionStock.length == 0) {
    return Promise.reject('SKU is not present in stocks/transaction');
  }

  const finalStockQty: IStock = {
    sku: sku,
    stock: initialStock ? initialStock.stock : 0,
  };

  transactionStock.forEach((item) => {
    if (item.type === TransactionType.ORDER) {
      finalStockQty.stock -= item.qty;
    } else if (item.type == TransactionType.REFUND) {
      finalStockQty.stock += item.qty;
    }
  });

  if (finalStockQty.stock <= 0) {
    return Promise.reject('SKU NOT FOUND');
  }

  return Promise.resolve(finalStockQty);
}
