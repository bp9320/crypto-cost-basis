import React, { useContext } from "react";
import CalculationContext from "../../context/calculation/calculationContext";
import TransactionRow from "./TransactionRow";
const validations = require("../../context/transaction/inputValidations");

const TransactionTable = (props) => {
  // set up calculation context
  const calculationContext = useContext(CalculationContext);

  const { setAssetTypes } = calculationContext;

  if (props.transactions.length === 0) {
    return (
      <div className="container center-align">
        <h4>Enter a transaction!</h4>
      </div>
    );
  }

  console.log(props.transactions);

  const findDateOfFirstInvalidTransaction = (transactions) => {
    for (let transaction of transactions) {
      if (!validations.isAlphanumeric(transaction.service)) {
        return transaction.displayDate;
      } else if (!validations.isAlphanumeric(transaction.asset)) {
        return transaction.displayDate;
      } else if (!transaction.transDate.isValid()) {
        return transaction.displayDate;
      } else if (!validations.isPositiveNumber(transaction.qty)) {
        return transaction.displayDate;
      } else if (
        transaction.amount <= 0 ||
        !validations.isNumberWithMaxTwoDecimals(transaction.amount)
      ) {
        return transaction.displayDate;
      } else if (
        transaction.fee < 0 ||
        !validations.isNumberWithMaxTwoDecimals(transaction.fee)
      ) {
        return transaction.displayDate;
      }
    }
    return null;
  };

  const onClick = () => {
    let dateOfInvalidTransaction = findDateOfFirstInvalidTransaction(
      props.transactions
    );
    if (dateOfInvalidTransaction) {
      let errorMessage = `Your transaction dated ${dateOfInvalidTransaction} has invalid input.`;
      props.setErrorMessage(errorMessage);
    } else {
      try {
        setAssetTypes(props.transactions);
      } catch (err) {
        if (err.name === "SellMoreThanOwnError") {
          let errorMessage = `Your transaction dated ${err.transactionErrorDate} is attempting to sell more assets than you currently own.`;
          props.setErrorMessage(errorMessage);
        } else {
          throw err;
        }
      }
    }
  };

  return (
    <div className="container">
      <table className="striped centered">
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
          {props.transactions.map((transaction) => (
            <TransactionRow transaction={transaction} key={transaction.id} />
          ))}
        </tbody>
      </table>
      <div className="row center-align">
        <button className="waves-effect waves-light btn" onClick={onClick}>
          <i className="material-icons right">attach_money</i>Calculate!
        </button>
      </div>
    </div>
  );
};

export default TransactionTable;
