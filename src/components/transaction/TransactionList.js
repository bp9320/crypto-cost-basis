import React, { Fragment, useContext } from "react";
import TransactionCard from "./TransactionCard";

const TransactionList = (props) => {
  if (props.transactions.length === 0) {
    return <h4>Enter a transaction!</h4>;
  }

  console.log(props.transactions);

  return (
    <Fragment>
      {props.transactions.map((transaction) => (
        <TransactionCard transaction={transaction} key={transaction.id} />
      ))}
      ;
    </Fragment>
  );
};

export default TransactionList;
