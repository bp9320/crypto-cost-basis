import React, { useReducer } from 'react';
import uuid from 'uuid';
import TransactionContext from './transactionContext';
import transactionReducer from './transactionReducer';

import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TRANSACTION
} from '../types';

const TransactionState = props => {
  const initialState = {
    transactions: [],
    sorted: {},
    current: null
  };

  const [state, dispatch] = useReducer(transactionReducer, initialState);

  // Add Transaction
  const addTransaction = transaction => {
    transaction.id = uuid.v4();
    dispatch({ type: ADD_TRANSACTION, payload: transaction });
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
        current: state.current,
        addTransaction
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionState;
