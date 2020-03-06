import React, { useReducer } from 'react';
// import moment from 'moment';
import CalculationContext from './calculationContext';
import calculationReducer from './calculationReducer';

import { ADD_ASSET_TRANSACTIONS } from '../types';

const CalculationState = props => {
  const initialState = {
    assetTypes: null,
    transByAsset: null
  };

  const [state, dispatch] = useReducer(calculationReducer, initialState);

  const setAssetTypes = transactions => {
    let uniqueTypes = [];
    let transByAsset = {};
    let assetTrans = null;

    // sort all transactions by date
    transactions.sort((a, b) => a.transDate - b.transDate);

    // generate list of unique asset types
    for (let transaction of transactions) {
      if (uniqueTypes.indexOf(transaction.asset) === -1) {
        uniqueTypes.push(transaction.asset.toUpperCase());
      }
    }

    // separate transactions by asset type and calculate cost basis
    for (let type of uniqueTypes) {
      assetTrans = transactions.filter(
        transaction => transaction.asset.toUpperCase() === type
      );

      calculateCostBasis(assetTrans);
      transByAsset[type] = assetTrans;
    }

    // calculate cost basis

    let myPayload = { types: uniqueTypes, assets: transByAsset };

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
  for (let transaction of transactions) {
    if (transaction.type.toLowerCase() === 'buy') {
      transaction.costBasis = transaction.amount + transaction.fee;
      transaction.averageCost = transaction.costBasis / transaction.qty;
      purchases.push({
        qtyLeft: transaction.qty,
        avgCost: transaction.averageCost
      });
      console.log(purchases);
    } else if (transaction.type.toLowerCase() === 'sell') {
      let qtySaleRemaining = transaction.qty;
      let costBasis = 0;
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
          costBasis += purchases[ 0 ].avgCost * purchases[ 0 ].qtyLeft;
          
          // subtract quantity used from quantity remaining
          qtySaleRemaining -= purchases[ 0 ].qtyLeft;

          // remove depleted purchase from purchases array
          purchases.shift();
        }

      } while (qtySaleRemaining > 0);

      costBasis += transaction.fee;

      // add cost basis to the trasaction object
      transaction.costBasis = costBasis;
      transaction.capitalGain = transaction.amount - costBasis
    } 
  }
}