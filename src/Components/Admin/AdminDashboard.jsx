import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../config/AxiosConfig';
import { toast } from 'react-toastify';

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('Stock Data');
  const [orders, setOrders] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [stockEditId, setStockEditId] = useState(null);
  const [updatedStock, setUpdatedStock] = useState({});

  // Fetch Data from API
  useEffect(() => {
    if (selectedTab === 'Orders') {
      axiosInstance.get('/admin/getAllOrders').then((response) => setOrders(response.data.data));
    } else if (selectedTab === 'Subscriptions') {
      axiosInstance.get('/admin/getAllSubscriptions').then((response) => {
        setSubscriptions(response.data.data)
        console.log(response.data.data)
    });
    } else if (selectedTab === 'Stock Data') {
      axiosInstance.get('admin/getStocks').then((response) => { 
        setStockData(response.data.data)
        console.log(response)
    });
        
    }
  }, [selectedTab]);

  // Filter data based on search term
  const filteredOrders = orders.filter(
    (order) => order.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredSubscriptions = subscriptions.filter(
    (sub) => sub.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
//   var filteredStock;
//   if(stockData){
//   filteredStock = stockData.filter(
//     (stock) => stock.itemId.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// }

  // Update stock function
  const handleStockUpdate = (itemId) => {
    axiosInstance
      .post(`/admin/updateStocks`, updatedStock)
      .then((response) => {
        // Update local state after successful update
        // setStockData((prevStockData) =>
        //   prevStockData.map((stock) =>
        //     stock.itemId === itemId ? response.data : stock
        //   )
        // );
        if(response.data.flag){
        setStockEditId(null); // Close edit mode
        alert('Stock updated successfully!');
        window.location.reload();
        }else{
            toast.warn("Error in updating data");
        }
      })
      .catch((error) => console.error('Error updating stock:', error));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">Admin Dashboard</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`py-2 px-4 ${selectedTab === 'Orders' ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
          onClick={() => setSelectedTab('Orders')}
        >
          Orders
        </button>
        <button
          className={`py-2 px-4 ${selectedTab === 'Subscriptions' ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
          onClick={() => setSelectedTab('Subscriptions')}
        >
          Subscriptions
        </button>
        <button
          className={`py-2 px-4 ${selectedTab === 'Stock Data' ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
          onClick={() => setSelectedTab('Stock Data')}
        >
          Stock Data
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by email or item ID"
          className="p-2 border border-gray-400 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Display selected segment */}
      <div className="bg-white p-6 rounded-lg shadow">
        {selectedTab === 'Orders' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Orders</h2>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Order ID</th>
                  <th className="px-4 py-2">Email</th>
                  <th className='px-4 py-2'>Order Details</th>
                  <th className="px-4 py-2">User ID</th>
                  <th className="px-4 py-2">Delivered</th>
                  <th className="px-4 py-2">Created At</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.orderId}>
                    <td className="border px-4 py-2">{order.orderId}</td>
                    <td className="border px-4 py-2">{order.email}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-300">
                {/* Display object content in a single box */}
                {Object.entries(order.orderDetails).map(([key, value]) => (
                  <p key={key} className="mb-1">
                    <span className="font-semibold text-gray-700">{key}:</span>{" "}
                    <span className="text-gray-800">
                      {typeof value === "object"
                        ? JSON.stringify(value)
                        : value}
                    </span>
                  </p>
                ))}
              </div>
            </td>
                    <td className="border px-4 py-2">{order.userid}</td>
                    <td className="border px-4 py-2">{order.isDelivered ? 'Yes' : 'No'}</td>
                    <td className="border px-4 py-2">{order.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedTab === 'Subscriptions' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Subscriptions</h2>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Subscription ID</th>
                  <th className="px-4 py-2">Email</th>
                  <th className='px-4 py-2'>Subscripton Details</th>
                  <th className="px-4 py-2">User ID</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Box Size</th>
                  <th className="px-4 py-2">Created At</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscriptions.map((sub) => (
                  <tr key={sub.subscriptionId}>
                    <td className="border px-4 py-2">{sub.subscriptionId}</td>
                    <td className="border px-4 py-2">{sub.email}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-300">
                {/* Display object content in a single box */}
                {Object.entries(sub.subscriptionDetails).map(([key, value]) => (
                  <p key={key} className="mb-1">
                    <span className="font-semibold text-gray-700">{key}:</span>{" "}
                    <span className="text-gray-800">
                      {typeof value === "object"
                        ? JSON.stringify(value)
                        : value}
                    </span>
                  </p>
                ))}
              </div>
            </td>
                    <td className="border px-4 py-2">{sub.userid}</td>
                    <td className="border px-4 py-2">{sub.subscriptionType}</td>
                    <td className="border px-4 py-2">{sub.boxSize}</td>
                    <td className="border px-4 py-2">{sub.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedTab === 'Stock Data' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Stock Data</h2>
            <table className="table-auto">
              <thead>
                <tr>
                  {/* <th className="px-4 py-2">Item ID</th> */}
                  <th className="px-4 py-2">Baby Spinach</th>
                  <th className="px-4 py-2">Pak Choi</th>
                  <th className="px-4 py-2">Basil</th>
                  <th className="px-4 py-2">Kale</th>
                  <th className="px-4 py-2">Lettuce</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              {stockData && 
              <tbody>
                {stockData.map((stock) => (
                    
                  <tr key={stock.itemId}>
                    {/* <td className="border px-2 py-2">{stock.itemId}</td> */}
                    <td className="border px-2 py-2">
                      {stockEditId === stock.itemId ? (
                        <input
                          type="number"
                          value={updatedStock.babySpinachQuantity}
                          onChange={(e) =>
                            setUpdatedStock((prev) => ({
                              ...prev,
                              babySpinachQuantity: e.target.value,
                            }))
                          }
                        />
                      ) : (
                        stock.babySpinachQuantity
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      {stockEditId === stock.itemId ? (
                        <input
                          type="number"
                          value={updatedStock.pakChoiQuantity}
                          onChange={(e) =>
                            setUpdatedStock((prev) => ({
                              ...prev,
                              pakChoiQuantity: e.target.value,
                            }))
                          }
                        />
                      ) : (
                        stock.pakChoiQuantity
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      {stockEditId === stock.itemId ? (
                        <input
                          type="number"
                          value={updatedStock.basilQuantity}
                          onChange={(e) =>
                            setUpdatedStock((prev) => ({
                              ...prev,
                              basilQuantity: e.target.value,
                            }))
                          }
                        />
                      ) : (
                        stock.basilQuantity
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      {stockEditId === stock.itemId ? (
                        <input
                          type="number"
                          value={updatedStock.kaleQuantity}
                          onChange={(e) =>
                            setUpdatedStock((prev) => ({
                              ...prev,
                              kaleQuantity: e.target.value,
                            }))
                          }
                        />
                      ) : (
                        stock.kaleQuantity
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      {stockEditId === stock.itemId ? (
                        <input
                          type="number"
                          value={updatedStock.lettuceQuantity}
                          onChange={(e) =>
                            setUpdatedStock((prev) => ({
                              ...prev,
                              lettuceQuantity: e.target.value,
                            }))
                          }
                        />
                      ) : (
                        stock.lettuceQuantity
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      {stockEditId === stock.itemId ? (
                        <button
                          className="bg-green-500 text-white px-4 py-2 rounded"
                          onClick={() => handleStockUpdate(stock.itemId)}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="bg-blue-500 text-white px-4 py-2 rounded"
                          onClick={() => {
                            setStockEditId(stock.itemId);
                            setUpdatedStock(stock);
                          }}
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              }
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
