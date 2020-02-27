import React from 'react';
import PropTypes from 'prop-types';

const TransactionRow = ({ transaction }) => {
  console.log(transaction);

  const {
    // id,
    service,
    type,
    asset,
    displayDate,
    // transDate,
    qty,
    amount,
    fee
  } = transaction;

  console.log('pre-return');

  return (
    <tr>
      <td>{service}</td>
      <td>{type}</td>
      <td>{asset}</td>
      <td>{displayDate}</td>
      <td>{qty}</td>
      <td>$ {amount}</td>
      <td>$ {fee}</td>
    </tr>
  );
};

TransactionRow.propTypes = {
  transaction: PropTypes.object.isRequired
};

export default TransactionRow;
