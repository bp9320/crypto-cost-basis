import React, { useEffect, useState } from 'react';

const TransactionForm = () => {
  useEffect(() => {
    const datePicker = document.querySelector('.datepicker');
    // eslint-disable-next-line no-undef
    M.Datepicker.init(datePicker, {
      autoClose: true
    });

    const select = document.querySelector('#type');
    // eslint-disable-next-line no-undef
    M.FormSelect.init(select);
  });

  const [transaction, setTransaction] = useState({
    service: '',
    type: 'sale',
    asset: '',
    transdate: '',
    qty: '',
    amount: '',
    fee: ''
  });

  const { service, type, asset, transdate, qty, amount, fee } = transaction;

  const onChange = e => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  return (
    <div className='row section'>
      <form action='' className='col s12'>
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
              name='transdate'
              id='transdate'
              placeholder='Click to pick date'
              className='datepicker'
              value={transdate}
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
