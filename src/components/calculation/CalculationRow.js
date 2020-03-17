import React from 'react';
import PropTypes from 'prop-types';

const CalculationRow = ({ transaction }) => {
  console.log(transaction);

  const {
    service,
    asset,
    purchaseDate,
    costBasis,
    sellDate,
    capitalGain
  } = transaction;

  console.log('pre-return');

  return (
    <tr>
      <td>{service}</td>
      <td>{asset}</td>
      <td>{purchaseDate.format('LLLL')}</td>
      <td>{costBasis.toFixed(2)}</td>
      <td>{sellDate.format('LLLL')}</td>
      <td>$ {capitalGain.toFixed(2)}</td>
    </tr>
  );
};

CalculationRow.propTypes = {
  transaction: PropTypes.object.isRequired
};

export default CalculationRow;
