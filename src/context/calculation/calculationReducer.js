import { SET_ASSET_TYPES, ADD_ASSET_TRANSACTIONS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ASSET_TYPES:
      return {
        ...state,
        assetTypes: action.payload
      };

    case ADD_ASSET_TRANSACTIONS:
      return {
        // ...state,
        transByAsset: action.payload.assets,
        assetTypes: action.payload.types,
        exportByAsset: action.payload.export
      };

    default:
      return state;
  }
};
