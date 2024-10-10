// src/StockDisplay.js
import React, { useState } from 'react';
import axiosInstance from '../../config/AxiosConfig';

const StockDisplay = () => {
    const [stockDeductions, setStockDeductions] = useState({
        babySpinachQuantity: 0,
        pakChoiQuantity: 0,
        basilQuantity: 0,
        kaleQuantity: 0,
        lettuceQuantity: 0,
    });

    const fetchStockData = () => {
        axiosInstance.get("/getStocks").then((res)=>{
            console.log(res)
            setStockDeductions(res.data.data)
        })   .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Current Stock Available</h1>
            <button
                onClick={fetchStockData}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Fetch Stock
            </button>
            <div className="bg-white p-4 rounded shadow-md">
                <ul className="space-y-2">
                    {Object.entries(stockDeductions).map(([key, value]) => (
                        <li key={key} className="flex justify-between">
                            <span className="font-medium capitalize">{key.replace(/Quantity/g, '')} :  {value} grams</span>
                            <span>  </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StockDisplay;
