import { ADD_TRANSACTION } from "../types";
import { SHOW_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case SHOW_ERROR:
      return {
        ...state,
        dateOfFirstInvalidTransaction: action.payload,
      };

    default:
      return state;
  }
};
