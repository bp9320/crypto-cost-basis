import React, { Fragment, Component } from "react";
import TransactionForm from "./components/transaction/TransactionForm";
import TransactionTable from "./components/transaction/TransactionTable";
import CalculationTable from "./components/calculation/CalculationTable";
import ErrorMessage from "./components/errors/ErrorMessage";

import CalculationState from "./context/calculation/CalculationState";

// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      transactionState: {
        transactions: [],
        sorted: {},
      },
    };
  }

  setErrorMessage = (message) => this.setState({ errorMessage: message });

  handleAddTransaction = (transaction) => {
    const newTransactions = [...this.state.transactionState.transactions];
    newTransactions.push(transaction);

    const sorted = { ...this.state.transactionState.sorted };

    this.setState({
      transactionState: { transactions: newTransactions, sorted: sorted },
    });
  };

  render() {
    return (
      <CalculationState>
        <Fragment>
          <h1 className="center-align">Crypto Capital Gains Calculator</h1>
          <div className="container">
            <p className="flow-text center">
              This app was built mainly to get practice designing and building
              React apps. I am not an accountant and make no guarantees that the
              calculations performed within this app are accurate. I encourage
              you to seek the help of an accountant or tax expert with any
              questions regarding tax obligations for crypto transactions.
            </p>
          </div>
          <div className="divider"></div>
          <TransactionForm addTransaction={this.handleAddTransaction} />
          <TransactionTable
            setErrorMessage={this.setErrorMessage}
            transactions={[...this.state.transactionState.transactions]}
          />
          <ErrorMessage errorMessage={this.state.errorMessage} />
          <CalculationTable />
        </Fragment>
      </CalculationState>
    );
  }
}

export default App;
