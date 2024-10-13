// src/StockDisplay.js
import React, { useState, useEffect } from "react";
import axiosInstance from "../../config/AxiosConfig";
import LeavesLoader from "../Loader/PlantLoader";

const StockDisplay = () => {
  const [stockDeductions, setStockDeductions] = useState();

  const fetchStockData = () => {
    axiosInstance
      .get("/getStocks")
      .then((res) => {
        console.log(res);
        setStockDeductions(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosInstance
      .get("/getStocks")
      .then((res) => {
        console.log(res);
        setStockDeductions(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {stockDeductions ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-2xl font-bold mb-4">Current Stocks Available</h1>
          <button
            onClick={fetchStockData}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Fetch Live Stock
          </button>
          <div className="bg-white p-4 rounded shadow-md">
            <ul className="space-y-2">
              {Object.entries(stockDeductions).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span className="font-medium capitalize">
                    {key.replace(/Quantity/g, "")} : {value} grams
                  </span>
                  <span> </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <LeavesLoader />
      )}
    </>
  );
};

export default StockDisplay;
