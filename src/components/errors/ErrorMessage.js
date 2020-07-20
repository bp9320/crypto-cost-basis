import React, { useContext } from "react";

import TransactionContext from "../../context/transaction/transactionContext";

const ErrorMessage = () => {
  const transactionContext = useContext(TransactionContext);

  const { dateOfFirstInvalidTransaction } = transactionContext;

  if (dateOfFirstInvalidTransaction) {
    return (
      <h4 className="red-text text-darken-3 center-align">
        Your transaction dated {dateOfFirstInvalidTransaction} has invalid
        input.
      </h4>
    );
  } else {
    return null;
  }
};

export default ErrorMessage;
