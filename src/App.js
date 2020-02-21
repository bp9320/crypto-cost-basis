import React, { Fragment } from 'react';
import TransactionForm from './components/transaction/TransactionForm';
import TransactionTable from './components/transaction/TransactionTable';

import TransactionState from './context/transaction/TransactionState';
// import './App.css';

const App = () => {
  return (
    <TransactionState>
      <Fragment>
        <h1 className='center-align'>Crypto Capital Gains Calculator</h1>
        <div className='container'>
          <p className='flow-text center'>
            This app was built mainly to get practice designing and building
            React apps. I am not an accountant and make no guarantees that the
            calculations performed within this app are accurate. I encourage you
            to seek the help of an accountant or tax expert with any questions
            regarding tax obligations for crypto transactions.
          </p>
        </div>
        <div className='divider'></div>
        <TransactionForm />
        <TransactionTable />
      </Fragment>
    </TransactionState>
  );
};

export default App;
