import calculateCostBasis from "./calculateCostBasis";

// Tests
describe("test calculateCostBasis function", () => {
  test("calculates capital gain and cost basis of single purchase and single sale", () => {
    const oneBuyOneSellData = [
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

    expect(calculateCostBasis(oneBuyOneSellData)).toMatchObject([
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

  test("calculates capital gain and cost basis of single purchase and three sales", () => {
    const oneBuyThreeSellData = [
      {
        service: "Coinbase",
        asset: "ETH",
        transDate: "2018-01-31T07:01:31.000Z",
        type: "Buy",
        qty: 6,
        amount: 600,
        fee: 6,
        id: "id1",
        displayDate: "Wed, Jan 31, 2018 1:01 AM",
      },
      {
        service: "Coinbase",
        asset: "ETH",
        transDate: "2018-01-31T07:01:38.000Z",
        type: "Sell",
        qty: 1,
        amount: 100,
        fee: 4,
        id: "id2",
        displayDate: "Wed, Jan 31, 2018 1:01 AM",
      },
      {
        service: "Coinbase",
        asset: "ETH",
        transDate: "2018-02-31T07:01:38.000Z",
        type: "Sell",
        qty: 2,
        amount: 300,
        fee: 10,
        id: "id3",
        displayDate: "Wed, Jan 31, 2018 1:01 AM",
      },
      {
        service: "Coinbase",
        asset: "ETH",
        transDate: "2018-03-31T07:01:38.000Z",
        type: "Sell",
        qty: 3,
        amount: 600,
        fee: 2,
        id: "id4",
        displayDate: "Wed, Jan 31, 2018 1:01 AM",
      },
    ];

    expect(calculateCostBasis(oneBuyThreeSellData)).toMatchObject([
      {
        asset: "ETH",
        capitalGain: -5,
        costBasis: 105,
        id: "id2",
        purchaseDate: "2018-01-31T07:01:31.000Z",
        sellDate: "2018-01-31T07:01:38.000Z",
        service: "Coinbase",
      },
      {
        asset: "ETH",
        capitalGain: 88,
        costBasis: 212,
        id: "id3",
        purchaseDate: "2018-01-31T07:01:31.000Z",
        sellDate: "2018-02-31T07:01:38.000Z",
        service: "Coinbase",
      },
      {
        asset: "ETH",
        capitalGain: 295,
        costBasis: 305,
        id: "id4",
        purchaseDate: "2018-01-31T07:01:31.000Z",
        sellDate: "2018-03-31T07:01:38.000Z",
        service: "Coinbase",
      },
    ]);
  });

  test("calculates capital gain and cost basis of single sale spanning three purchases", () => {
    const threeBuyOneSellData = [
      {
        service: "Coinbase",
        asset: "ETH",
        transDate: "2018-01-31T07:01:31.000Z",
        type: "Buy",
        qty: 6,
        amount: 600,
        fee: 6,
        id: "id1",
        displayDate: "Wed, Jan 31, 2018 1:01 AM",
      },
      {
        service: "Coinbase",
        asset: "ETH",
        transDate: "2018-01-31T07:01:38.000Z",
        type: "Buy",
        qty: 1,
        amount: 100,
        fee: 4,
        id: "id2",
        displayDate: "Wed, Jan 31, 2018 1:01 AM",
      },
      {
        service: "Coinbase",
        asset: "ETH",
        transDate: "2018-02-31T07:01:38.000Z",
        type: "Buy",
        qty: 2,
        amount: 300,
        fee: 10,
        id: "id3",
        displayDate: "Wed, Jan 31, 2018 1:01 AM",
      },
      {
        service: "Coinbase",
        asset: "ETH",
        transDate: "2018-03-31T07:01:38.000Z",
        type: "Sell",
        qty: 8,
        amount: 600,
        fee: 2,
        id: "id4",
        displayDate: "Wed, Jan 31, 2018 1:01 AM",
      },
    ];

    expect(calculateCostBasis(threeBuyOneSellData)).toMatchObject([
      {
        asset: "ETH",
        capitalGain: -267,
        costBasis: 867,
        id: "id4",
        purchaseDate: "2018-01-31T07:01:31.000Z",
        sellDate: "2018-03-31T07:01:38.000Z",
        service: "Coinbase",
      },
    ]);
  });
});
