import React, { useReducer } from "react";
// import moment from 'moment';
// import uuid from 'uuid';
import CalculationContext from "./calculationContext";
import calculationReducer from "./calculationReducer";
import calculateCostBasis from "./calculateCostBasis";

import { ADD_ASSET_TRANSACTIONS } from "../types";

const CalculationState = (props) => {
  const initialState = {
    assetTypes: null,
    transByAsset: null,
    exportByAsset: null,
  };

  const [state, dispatch] = useReducer(calculationReducer, initialState);

  const setAssetTypes = (transactions) => {
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
        (transaction) => transaction.asset.toUpperCase() === type
      );

      exportByAsset[type] = calculateCostBasis(assetTrans);
      transByAsset[type] = assetTrans;
    }

    // calculate cost basis

    let myPayload = {
      types: uniqueTypes,
      assets: transByAsset,
      export: exportByAsset,
    };

    dispatch({
      type: ADD_ASSET_TRANSACTIONS,
      payload: myPayload,
    });
  };

  return (
    <CalculationContext.Provider
      value={{
        assetTypes: state.assetTypes,
        transByAsset: state.transByAsset,
        exportByAsset: state.exportByAsset,
        setAssetTypes,
      }}
    >
      {props.children}
    </CalculationContext.Provider>
  );
};

export default CalculationState;
