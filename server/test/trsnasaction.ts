import { StockTransaction } from '../src/service/transactionService';
import { expect } from 'chai';
import { IStock } from '../src/interface/iStock';

describe('Check the remaining quantity', () => {
  it('Should return remaining stocks ', (done) => {
    StockTransaction('LTV719449/39/39')
      .then((data) => {
        expect(data.stock).to.equal(8510);
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  it('Invalid Stock', (done) => {
    StockTransaction('abcd')
      .then((data) => {})
      .catch((e) => {
        console.log(e);
        expect(e).to.equal('SKU is not present in stocks/transaction');
        done();
      });
  });
});
