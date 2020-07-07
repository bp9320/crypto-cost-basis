let calculateCostBasis = require("./calculateCostBasis");

const testData = [
  {
    service: "Coinbase",
    asset: "ETH",
    transDate: "2018-01-31T07:01:38.000Z",
    type: "Buy",
    qty: 2,
    amount: 300,
    fee: 6,
    id: "id1",
    displayDate: "Wed, Jan 31, 2018 1:01 AM",
  },
  {
    service: "Coinbase",
    asset: "ETH",
    transDate: "2019-01-11T11:07:11.000Z",
    type: "Sell",
    qty: 1,
    amount: 400,
    fee: 8,
    id: "id2",
    displayDate: "Fri, Jan 11, 2019 5:07 AM",
  },
];

test("calculates capital gain and cost basis of single purchase and single sale", () => {
  expect(calculateCostBasis(testData)).toMatchObject([
    {
      asset: "ETH",
      capitalGain: 239,
      costBasis: 161,
      id: "id2",
      purchaseDate: "2018-01-31T07:01:38.000Z",
      sellDate: "2019-01-11T11:07:11.000Z",
      service: "Coinbase",
    },
  ]);
});
