import React from 'react';
import PropTypes from 'prop-types';

const TransactionCard = ({ transaction }) => {
  console.log(transaction);

  const {
    // id,
    service,
    type,
    asset,
    displayDate,
    qty,
    amount,
    fee
  } = transaction;

  return (
    <div className='row'>
      <div className='col s4 push-s4'>
        <div className='card blue-grey'>
          <div className='card-content'>
            <span className='card-title'>{service}</span>
            <div className='row'>
              <div className='col s4'>Type: {type}</div>
              <div className='col s4'>Asset: {asset}</div>
              <div className='col s4'>Date: {displayDate}</div>
            </div>
            <div className='row'>
              <div className='col s4'>Quantity: {qty}</div>
              <div className='col s4'>Amount: ${amount}</div>
              <div className='col s4'>Fee: ${fee}</div>
            </div>
            <button className='btn-floating btn-large waves-effect waves-light teal halfway-fab'>
              <i className='material-icons'>edit</i>
            </button>
            <button className='btn-floating btn-large waves-effect waves-light red halfway-fab left'>
              <i className='material-icons'>delete_forever</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TransactionCard.propTypes = {
  transaction: PropTypes.object.isRequired
};

export default TransactionCard;
