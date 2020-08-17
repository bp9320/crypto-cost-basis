import React, { Fragment, useEffect, useState } from "react";
import uuid from "uuid";
import moment from "moment";
import Papa from "papaparse";

const TransactionForm = (props) => {
  const buildTransaction = (rawTransactionData) => {
    // set unique id
    rawTransactionData.id = uuid.v4();

    // format input data
    rawTransactionData.transDate = moment(rawTransactionData.transDate);
    rawTransactionData.qty = parseFloat(rawTransactionData.qty);
    rawTransactionData.amount = parseFloat(rawTransactionData.amount);
    rawTransactionData.fee = parseFloat(rawTransactionData.fee);

    // set display date
    rawTransactionData.displayDate = rawTransactionData.transDate.format(
      "llll"
    );
    return rawTransactionData;
  };

  useEffect(() => {
    const select = document.querySelector("#type");
    // eslint-disable-next-line no-undef
    M.FormSelect.init(select);
  });

  // set up component level state
  const [transaction, setTransaction] = useState({
    service: "",
    type: "sell",
    asset: "",
    //displayDate: '',
    transDate: "",
    qty: "",
    amount: "",
    fee: "",
  });

  // destructure state for easier use
  const { service, type, asset, transDate, qty, amount, fee } = transaction;

  // update component state when form inputs change
  const onChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  // actions for single transaction form submission
  const onSubmitSingle = (e) => {
    e.preventDefault();
    const newTransaction = buildTransaction(transaction);
    props.addTransaction(newTransaction);
    setTransaction({
      service: "",
      type: "sell",
      asset: "",
      //displayDate: '',
      transDate: "",
      qty: "",
      amount: "",
      fee: "",
    });
  };

  // actions for file upload form submission
  const onSubmitUpload = (e) => {
    e.preventDefault();
    const file = document.getElementById("fileUpload");
    console.log(file, file.files.length);
    if (file.files.length > 0) {
      Papa.parse(file.files[0], {
        header: true,
        complete: (parsedTransactions) => {
          // put add transaction code here
          console.log(parsedTransactions);
          for (var csvTransaction of parsedTransactions.data) {
            const newTransaction = buildTransaction(csvTransaction);
            props.addTransaction(newTransaction);
          }
        },
      });
    }
    file.value = "";
    document.getElementById("filePathText").value = "";
  };

  return (
    <Fragment>
      <div className="row section">
        <form className="col s12" onSubmit={onSubmitSingle}>
          <div className="row">
            <div className="input-field col s2">
              <input
                type="text"
                name="service"
                id="service"
                value={service}
                placeholder="e.g. Coinbase"
                className="validate"
                onChange={onChange}
              />
              <label htmlFor="service">Trading Service</label>
            </div>
            <div className="input-field col s2">
              <select name="type" id="type" value={type} onChange={onChange}>
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
              </select>
              <label htmlFor="type">Transaction Type</label>
            </div>
            <div className="input-field col s1">
              <input
                type="text"
                name="asset"
                id="asset"
                placeholder="e.g. BTC, ETH, LTC"
                className="validate"
                value={asset}
                onChange={onChange}
              />
              <label htmlFor="asset">Asset</label>
            </div>
            <div className="input-field col s2">
              <input
                type="text"
                name="transDate"
                id="transDate"
                placeholder="ISO 8601 Format"
                className="datepicker"
                value={transDate}
                onChange={onChange}
              />
              <label htmlFor="transdate">Transaction Date</label>
            </div>
            <div className="input-field col s1">
              <input
                type="text"
                name="qty"
                id="qty"
                placeholder="Quantity"
                value={qty}
                onChange={onChange}
              />
              <label htmlFor="qty">Quantity</label>
            </div>
            <div className="input-field col s2">
              <input
                type="text"
                name="amount"
                id="amount"
                placeholder="Dollar Amount"
                value={amount}
                onChange={onChange}
              />
              <label htmlFor="amount">Transaction Amount</label>
            </div>
            <div className="input-field col s2">
              <input
                type="text"
                name="fee"
                id="fee"
                placeholder="Fees"
                value={fee}
                onChange={onChange}
              />
              <label htmlFor="fee">Transaction Fee</label>
            </div>
          </div>
          <div className="row center-align">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="submit"
            >
              Add Transaction
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
      <div className="row section">
        <form className="col s4 push-s4" onSubmit={onSubmitUpload}>
          <div className="file-field input-field">
            <div className="btn">
              <span>Select File</span>
              <input type="file" id="fileUpload" />
            </div>
            <div className="file-path-wrapper">
              <input
                type="text"
                className="file-path validate"
                id="filePathText"
              />
            </div>
          </div>
          <div className="row center-align">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="submit"
            >
              Parse Transactions
              <i className="material-icons right">insert_drive_file</i>
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default TransactionForm;
