import { useState } from "react";
import "./showTable.css";

const ShowTable = () => {
  const [show, setShow] = useState(false);
  const stockData = [
    {
      company: "Twitter Inc",
      ticker: "TWTR",
      stockPrice: "22.76 USD",
      timeElapsed: "5 sec ago",
    },

    {
      company: "Square Inc",
      ticker: "SQ",
      stockPrice: "45.28 USD",
      timeElapsed: "10 sec ago",
    },
    {
      company: "Shopify Inc",
      ticker: "SHOP",
      stockPrice: "341.79 USD",
      timeElapsed: "3 sec ago",
    },
    {
      company: "Sunrun Inc",
      ticker: "RUN",
      stockPrice: "9.87 USD",
      timeElapsed: "4 sec ago",
    },
  ];

  function showTable() {
    setShow(!show);
  }
  console.log();
  return (
    <div>
      <div className="heading">
        <h1>Stock Data</h1>
        <button onClick={showTable}>Show Table</button>
      </div>
      {show && (
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Ticker</th>
              <th>Stock Price</th>
              <th>Time Elapsed</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((data, index) => (
              <tr key={index}>
                <td>{data.company}</td>
                <td>{data.ticker}</td>
                <td>{data.stockPrice}</td>
                <td>{data.timeElapsed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowTable;
