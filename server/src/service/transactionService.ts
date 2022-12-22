import { IStock } from 'src/interface/iStock';

/**
 *
 * @param sku The unique id for the stock
 * @returns object which contains the sku and quantity of stock after transaction
 */
export function StockTransaction(sku: string): Promise<IStock> {
  return null;
}
