import React, { useReducer } from 'react';
// import moment from 'moment';
import CalculationContext from './calculationContext';
import calculationReducer from './calculationReducer';

import { SET_ASSET_TYPES, ADD_ASSET_TRANSACTIONS } from '../types';

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
    for (let transaction of transactions) {
      if (uniqueTypes.indexOf(transaction.asset) === -1) {
        uniqueTypes.push(transaction.asset.toUpperCase());
      }
    }

    for (let type of uniqueTypes) {
      assetTrans = transactions.filter(
        transaction => transaction.asset.toUpperCase() === type
      );
      transByAsset[type] = assetTrans;
    }

    let myPayload = { types: uniqueTypes, assets: transByAsset };

    dispatch({
      type: SET_ASSET_TYPES,
      payload: myPayload
    });
  };

  // const setAssetTypes = transactions => {
  //   let uniqueTypes = [];
  //   for (let transaction of transactions) {
  //     if (uniqueTypes.indexOf(transaction.asset) === -1) {
  //       uniqueTypes.push(transaction.asset.toUpperCase());
  //     }
  //   }
  //   dispatch({
  //     type: SET_ASSET_TYPES,
  //     payload: uniqueTypes
  //   });
  // };

  // const addAssetTransactions = transactions => {
  //   let transByAsset = {};
  //   let assetTrans = [];

  //   console.log('calculation state: ', state);
  //   if (state.assetTypes) {
  //     for (let type of state.assetTypes) {
  //       assetTrans = transactions.filter(
  //         transaction => transaction.asset.toUpperCase() === type
  //       );
  //       transByAsset.type = assetTrans;
  //     }
  //   }

  //   dispatch({
  //     type: ADD_ASSET_TRANSACTIONS,
  //     payload: transByAsset
  //   });
  // };

  return (
    <CalculationContext.Provider
      value={{
        assetTypes: state.assetTypes,
        setAssetTypes
      }}
    >
      {props.children}
    </CalculationContext.Provider>
  );
};

export default CalculationState;
