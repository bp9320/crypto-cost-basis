import React, { useReducer } from 'react';
// import moment from 'moment';
import CalculationContext from './calculationContext';
import calculationReducer from './calculationReducer';

import { SET_ASSET_TYPES } from '../types';

const CalculationState = props => {
  const initialState = {
    assetTypes: null
  };

  const [state, dispatch] = useReducer(calculationReducer, initialState);

  const setAssetTypes = transactions => {
    let uniqueTypes = [];
    for (var transaction of transactions) {
      if (uniqueTypes.indexOf(transaction.asset) === -1) {
        uniqueTypes.push(transaction.asset.toUpperCase());
      }
    }
    dispatch({
      type: SET_ASSET_TYPES,
      payload: uniqueTypes
    });
  };

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
