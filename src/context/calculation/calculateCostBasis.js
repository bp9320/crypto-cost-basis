export class SellMoreThanOwnError extends Error {
  constructor(message, transactionErrorDate) {
    super(message);
    this.name = "SellMoreThanOwnError";
    this.transactionErrorDate = transactionErrorDate;
  }
}

export function calculateCostBasis(transactions) {
  let purchases = [];
  let calculationExport = [];

  for (let transaction of transactions) {
    if (transaction.type.toLowerCase() === "buy") {
      transaction.costBasis = transaction.amount + transaction.fee;
      transaction.averageCost = transaction.costBasis / transaction.qty;
      purchases.push({
        transDate: transaction.transDate,
        service: transaction.service,
        qtyLeft: transaction.qty,
        avgCost: transaction.averageCost,
      });
      console.log(purchases);
    } else if (transaction.type.toLowerCase() === "sell") {
      let currentSaleEntry = {};
      let qtySaleRemaining = transaction.qty;
      let costBasis = 0;
      currentSaleEntry.id = transaction.id;
      currentSaleEntry.service = purchases[0].service;
      currentSaleEntry.purchaseDate = purchases[0].transDate;
      currentSaleEntry.asset = transaction.asset;
      currentSaleEntry.sellDate = transaction.transDate;
      currentSaleEntry.displayDate = transaction.displayDate;
      do {
        if (purchases.length === 0) {
          const errorMessage = `Transaction dated ${currentSaleEntry.displayDate} is selling more assets than are currently owned.`;
          throw new SellMoreThanOwnError(
            errorMessage,
            currentSaleEntry.displayDate
          );
        }

        if (purchases[0].qtyLeft >= qtySaleRemaining) {
          // add assets from this purchase to cost basis
          costBasis += purchases[0].avgCost * qtySaleRemaining;

          // update quantity remaining for purchase
          if (purchases[0].qtyLeft === qtySaleRemaining) {
            purchases.shift();
          } else {
            purchases[0].qtyLeft -= qtySaleRemaining;
          }
          qtySaleRemaining = 0;
        } else {
          // add assets from this purchase to cost basis
          costBasis += purchases[0].avgCost * purchases[0].qtyLeft;

          // subtract quantity used from quantity remaining
          qtySaleRemaining -= purchases[0].qtyLeft;

          // remove depleted purchase from purchases array
          purchases.shift();
        }
      } while (qtySaleRemaining > 0);

      costBasis += transaction.fee;

      currentSaleEntry.capitalGain = transaction.amount - costBasis;
      currentSaleEntry.costBasis = costBasis;

      calculationExport.push(currentSaleEntry);

      // add cost basis to the trasaction object
      transaction.costBasis = costBasis;
      transaction.capitalGain = transaction.amount - costBasis;
    }
  }
  return calculationExport;
}
