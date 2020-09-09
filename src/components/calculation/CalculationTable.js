import React, { Fragment, useEffect } from "react";
import CalculationRow from "./CalculationRow";

const CalculationTable = (props) => {

  const { ownedAssetTypes, calculationsByAsset } = props;

  useEffect(() => {
    // eslint-disable-next-line no-undef
    $(".calculation-table").DataTable({
      paging: false,
      ordering: false,
      info: false,
      searching: false,
      dom: "Bfrtip",
      buttons: ["csv"],
    });
  });

  console.log("calculationsByAsset: ", calculationsByAsset);
  console.log("ownedAssetTypes: ", ownedAssetTypes);

  if (ownedAssetTypes) {
    return (
      <Fragment>
        {ownedAssetTypes.map((asset) => (
          <div className="container">
            <h2>{asset}</h2>
            <table className="striped centered calculation-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Asset</th>
                  <th>Date of Purchase</th>
                  <th>Cost Basis</th>
                  <th>Date of Sale</th>
                  <th>Sale Proceeds</th>
                </tr>
              </thead>
              <tbody>
                {calculationsByAsset[asset].map((transaction) => (
                  <CalculationRow
                    transaction={transaction}
                    key={transaction.id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </Fragment>
    );
  } else {
    return null;
  }
};

export default CalculationTable;
