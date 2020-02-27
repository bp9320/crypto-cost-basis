import { SET_ASSET_TYPES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ASSET_TYPES:
      return {
        ...state,
        assetTypes: [...state.assetTypes, action.payload]
      };

    default:
      return state;
  }
};
