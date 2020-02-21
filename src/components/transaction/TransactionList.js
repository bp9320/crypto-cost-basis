import React, { Fragment, useContext } from 'react';
import TransactionContext from '../../context/transaction/transactionContext';
import TransactionCard from './TransactionCard';

const TransactionList = () => {
  const transactionContext = useContext(TransactionContext);

  const { transactions, current } = transactionContext;

  if (transactions.length === 0) {
    return <h4>Enter a transaction!</h4>;
  }

  console.log(transactions);

  return (
    <Fragment>
      {transactions.map(transaction => (
        <TransactionCard transaction={transaction} key={transaction.id} />
      ))}
      ;
    </Fragment>
  );
};

export default TransactionList;
