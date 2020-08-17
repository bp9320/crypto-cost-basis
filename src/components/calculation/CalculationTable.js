import React, { useContext, Fragment, useEffect } from "react";
import CalculationContext from "../../context/calculation/calculationContext";
import CalculationRow from "./CalculationRow";

const CalculationTable = () => {
  // set up calculation context
  const calculationContext = useContext(CalculationContext);

  const { assetTypes, exportByAsset } = calculationContext;

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

  console.log("exportByAsset: ", exportByAsset);
  console.log("assetTypes: ", assetTypes);

  if (assetTypes) {
    return (
      <Fragment>
        {assetTypes.map((asset) => (
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
                {exportByAsset[asset].map((transaction) => (
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
