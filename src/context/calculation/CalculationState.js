import React, { useReducer } from 'react';
import moment from 'moment';
// import uuid from 'uuid';
import CalculationContext from './calculationContext';
import calculationReducer from './calculationReducer';

import { ADD_ASSET_TRANSACTIONS } from '../types';

const CalculationState = props => {
  const initialState = {
    assetTypes: null,
    transByAsset: null,
    exportByAsset: null
  };

  const [state, dispatch] = useReducer(calculationReducer, initialState);

  const setAssetTypes = transactions => {
    let uniqueTypes = [];
    let transByAsset = {};
    let assetTrans = null;
    let exportByAsset = {};
    let calcTransactions = [...transactions];
    // sort all transactions by date
    calcTransactions.sort((a, b) => a.transDate - b.transDate);

    // generate list of unique asset types
    for (let transaction of calcTransactions) {
      if (uniqueTypes.indexOf(transaction.asset) === -1) {
        uniqueTypes.push(transaction.asset.toUpperCase());
      }
    }

    // separate calcTransactions by asset type and calculate cost basis
    for (let type of uniqueTypes) {
      assetTrans = calcTransactions.filter(
        transaction => transaction.asset.toUpperCase() === type
      );

      exportByAsset[type] = calculateCostBasis(assetTrans);
      transByAsset[type] = assetTrans;
    }

    // calculate cost basis

    let myPayload = {
      types: uniqueTypes,
      assets: transByAsset,
      export: exportByAsset
    };

    dispatch({
      type: ADD_ASSET_TRANSACTIONS,
      payload: myPayload
    });
  };

  return (
    <CalculationContext.Provider
      value={{
        assetTypes: state.assetTypes,
        transByAsset: state.transByAsset,
        exportByAsset: state.exportByAsset,
        setAssetTypes
      }}
    >
      {props.children}
    </CalculationContext.Provider>
  );
};

export default CalculationState;

function calculateCostBasis(transactions) {
  let purchases = [];
  let calculationExport = [];

  for (let transaction of transactions) {
    if (transaction.type.toLowerCase() === 'buy') {
      transaction.costBasis = transaction.amount + transaction.fee;
      transaction.averageCost = transaction.costBasis / transaction.qty;
      purchases.push({
        transDate: transaction.transDate,
        service: transaction.service,
        qtyLeft: transaction.qty,
        avgCost: transaction.averageCost
      });
      console.log(purchases);
    } else if (transaction.type.toLowerCase() === 'sell') {
      let currentSaleEntry = {};
      let qtySaleRemaining = transaction.qty;
      let costBasis = 0;
      currentSaleEntry.id = transaction.id;
      currentSaleEntry.service = purchases[0].service;
      currentSaleEntry.purchaseDate = purchases[0].transDate;
      currentSaleEntry.asset = transaction.asset;
      currentSaleEntry.sellDate = transaction.transDate;
      do {
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
