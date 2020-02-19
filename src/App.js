import React, { fragment } from 'react';
import TransactionForm from './components/inputForm/TransactionForm';
// import './App.css';

const App = () => {
  return (
    <fragment>
      <h1 className='center-align'>Crypto Capital Gains Calculator</h1>
      <div className='container'>
        <p className='flow-text center'>
          This app was built mainly to get practice designing and building React
          apps. I am not an accountant and make no guarantees that the
          calculations performed within this app are accurate. I encourage you
          to seek the help of an accountant or tax expert with any questions
          regarding tax obligations for crypto transactions.
        </p>
      </div>
      <div className='divider'></div>
      <TransactionForm />
    </fragment>
  );
};

export default App;
