import React, { useContext } from "react";
import TransactionContext from "../../context/transaction/transactionContext";
import CalculationContext from "../../context/calculation/calculationContext";
import TransactionRow from "./TransactionRow";
const validations = require("../../context/transaction/inputValidations");

const TransactionTable = (props) => {
  // set up transaction context
  const transactionContext = useContext(TransactionContext);

  const { transactions } = transactionContext;

  // set up calculation context
  const calculationContext = useContext(CalculationContext);

  const { setAssetTypes } = calculationContext;

  if (transactions.length === 0) {
    return (
      <div className="container center-align">
        <h4>Enter a transaction!</h4>
      </div>
    );
  }

  console.log(transactions);

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
      transactions
    );
    if (dateOfInvalidTransaction) {
      let errorMessage = `Your transaction dated ${dateOfInvalidTransaction} has invalid input.`;
      props.setErrorMessage(errorMessage);
    } else {
      setAssetTypes(transactions);
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
          {transactions.map((transaction) => (
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
