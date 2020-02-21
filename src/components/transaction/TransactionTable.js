import React, { useContext } from 'react';
import TransactionContext from '../../context/transaction/transactionContext';
import TransactionRow from './TransactionRow';

const TransactionTable = () => {
  const transactionContext = useContext(TransactionContext);

  const { transactions /*, current */ } = transactionContext;

  if (transactions.length === 0) {
    return (
      <div className='container center-align'>
        <h4>Enter a transaction!</h4>
      </div>
    );
  }

  console.log(transactions);

  return (
    <div className='container'>
      <table className='striped centered'>
        <thead>
          <tr>
            <th>Service</th>
            <th>Type</th>
            <th>Asset</th>
            <th>Date</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <TransactionRow transaction={transaction} key={transaction.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
