import React, { useEffect, useState, useContext } from 'react';
import TransactionContext from '../../context/transaction/transactionContext';

const TransactionForm = () => {
  const transactionContext = useContext(TransactionContext);

  const { addTransaction } = transactionContext;

  useEffect(() => {
    // // Initializing datePicker and select elements with Materialize-css
    // const datePicker = document.querySelector('.datepicker');
    // // eslint-disable-next-line no-undef
    // M.Datepicker.init(datePicker, {
    //   autoClose: true,
    //   onSelect: date => {
    //     let dispDate = `${date.getDate()}, ${date.getFullYear()}`;
    //     switch (date.getMonth()) {
    //       case 0:
    //         dispDate = `Jan ${dispDate} `;
    //         break;

    //       case 1:
    //         dispDate = `Feb ${dispDate}`;
    //         break;

    //       case 2:
    //         dispDate = `Mar ${dispDate}`;
    //         break;

    //       case 3:
    //         dispDate = `Apr ${dispDate}`;
    //         break;

    //       case 4:
    //         dispDate = `May ${dispDate}`;
    //         break;

    //       case 5:
    //         dispDate = `Jun ${dispDate}`;
    //         break;

    //       case 6:
    //         dispDate = `Jul ${dispDate}`;
    //         break;

    //       case 7:
    //         dispDate = `Aug ${dispDate}`;
    //         break;

    //       case 8:
    //         dispDate = `Sep ${dispDate}`;
    //         break;

    //       case 9:
    //         dispDate = `Oct ${dispDate}`;
    //         break;

    //       case 10:
    //         dispDate = `Nov ${dispDate}`;
    //         break;

    //       case 11:
    //         dispDate = `Dec ${dispDate}`;
    //         break;

    //       default:
    //         dispDate = '';
    //         break;
    //     }
    //     setTransaction({
    //       ...transaction,
    //       transDate: date,
    //       displayDate: dispDate
    //     });
    //   }
    // });

    const select = document.querySelector('#type');
    // eslint-disable-next-line no-undef
    M.FormSelect.init(select);
  });

  // set up component level state
  const [transaction, setTransaction] = useState({
    service: '',
    type: 'sale',
    asset: '',
    displayDate: '',
    transDate: '',
    qty: '',
    amount: '',
    fee: ''
  });

  // destructure state for easier use
  const { service, type, asset, displayDate, qty, amount, fee } = transaction;

  // update component state when form inputs change
  const onChange = e => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  // actions for form submission
  const onSubmit = e => {
    e.preventDefault();
    addTransaction(transaction);
    setTransaction({
      service: '',
      type: 'sale',
      asset: '',
      displayDate: '',
      transDate: '',
      qty: '',
      amount: '',
      fee: ''
    });
  };

  return (
    <div className='row section'>
      <form className='col s12' onSubmit={onSubmit}>
        <div className='row'>
          <div className='input-field col s2'>
            <input
              type='text'
              name='service'
              id='service'
              value={service}
              placeholder='e.g. Coinbase'
              className='validate'
              onChange={onChange}
            />
            <label htmlFor='service'>Trading Service</label>
          </div>
          <div className='input-field col s2'>
            <select name='type' id='type' value={type} onChange={onChange}>
              <option value='purchase'>Purchase</option>
              <option value='sale'>Sale</option>
            </select>
            <label htmlFor='type'>Transaction Type</label>
          </div>
          <div className='input-field col s1'>
            <input
              type='text'
              name='asset'
              id='asset'
              placeholder='e.g. BTC, ETH, LTC'
              className='validate'
              value={asset}
              onChange={onChange}
            />
            <label htmlFor='asset'>Asset</label>
          </div>
          <div className='input-field col s2'>
            <input
              type='text'
              name='displayDate'
              id='displayDate'
              placeholder='ISO 8601 Format'
              className='datepicker'
              value={displayDate}
              onChange={onChange}
            />
            <label htmlFor='transdate'>Transaction Date</label>
          </div>
          <div className='input-field col s1'>
            <input
              type='text'
              name='qty'
              id='qty'
              placeholder='Quantity'
              value={qty}
              onChange={onChange}
            />
            <label htmlFor='qty'>Quantity</label>
          </div>
          <div className='input-field col s2'>
            <input
              type='text'
              name='amount'
              id='amount'
              placeholder='Dollar Amount'
              value={amount}
              onChange={onChange}
            />
            <label htmlFor='amount'>Transaction Amount</label>
          </div>
          <div className='input-field col s2'>
            <input
              type='text'
              name='fee'
              id='fee'
              placeholder='Fees'
              value={fee}
              onChange={onChange}
            />
            <label htmlFor='fee'>Transaction Fee</label>
          </div>
        </div>
        <div className='row center-align'>
          <button
            className='btn waves-effect waves-light'
            type='submit'
            name='submit'
          >
            Add Transaction
            <i className='material-icons right'>send</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
