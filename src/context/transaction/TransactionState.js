import React, { useReducer } from "react";
import uuid from "uuid";
import moment from "moment";
import TransactionContext from "./transactionContext";
import transactionReducer from "./transactionReducer";

import { ADD_TRANSACTION } from "../types";
import { SHOW_ERROR } from "../types";

const TransactionState = (props) => {
  const initialState = {
    transactions: [],
    sorted: {},
    dateOfFirstInvalidTransaction: null,
  };

  const [state, dispatch] = useReducer(transactionReducer, initialState);

  // Add Transaction
  const addTransaction = (transaction) => {
    // set unique id
    transaction.id = uuid.v4();

    // format input data
    transaction.transDate = moment(transaction.transDate);
    transaction.qty = parseFloat(transaction.qty);
    transaction.amount = parseFloat(transaction.amount);
    transaction.fee = parseFloat(transaction.fee);

    // set display date
    transaction.displayDate = transaction.transDate.format("llll");
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction,
    });
  };

  // Show Error
  const showError = (date) => {
    dispatch({
      type: SHOW_ERROR,
      payload: date,
    });
  };

  // Delete Transaction

  // Set Current Transaction

  // Clear Current Transaction

  // Update Transaction

  // Sort Transactions

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        sorted: state.sorted,
        dateOfFirstInvalidTransaction: state.dateOfFirstInvalidTransaction,
        addTransaction,
        showError,
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionState;
