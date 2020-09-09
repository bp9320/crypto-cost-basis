import React, { Fragment, Component } from "react";
import TransactionForm from "./components/transaction/TransactionForm";
import TransactionTable from "./components/transaction/TransactionTable";
import CalculationTable from "./components/calculation/CalculationTable";
import ErrorMessage from "./components/errors/ErrorMessage";
import { calculateCostBasis } from "./context/calculation/calculateCostBasis";



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
      calculationState: {
        assetTypes: [],
        transByAsset: {},
        exportByAsset: {},
      }
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

  handleCalculationClick = (transactions) => {
    let uniqueTypes = [];
    let transByAsset = {};
    let assetTrans = null;
    let exportByAsset = {};
    let calcTransactions = [...transactions];

    // sort all transactions by date
    calcTransactions.sort((a, b) => a.transDate - b.transDate);

    // generate list of unique asset types
    for (let transaction of calcTransactions) {
      if (uniqueTypes.indexOf(transaction.asset) === -1) {
        uniqueTypes.push(transaction.asset.toUpperCase());
      }
    }

    // separate calcTransactions by asset type and calculate cost basis
    for (let type of uniqueTypes) {
      assetTrans = calcTransactions.filter(
        (transaction) => transaction.asset.toUpperCase() === type
      );

      exportByAsset[type] = calculateCostBasis(assetTrans);
      transByAsset[type] = assetTrans;
    }

    this.setState({calculationState: {assetTypes: uniqueTypes, transByAsset, exportByAsset}})
  };



  render() {
    return (
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
            calculateCapitalGains={this.handleCalculationClick}
          />
          <ErrorMessage errorMessage={this.state.errorMessage} />
          <CalculationTable 
            ownedAssetTypes={[...this.state.calculationState.assetTypes]}
            calculationsByAsset={{...this.state.calculationState.exportByAsset}}
          />
        </Fragment>
    );
  }
}

export default App;
