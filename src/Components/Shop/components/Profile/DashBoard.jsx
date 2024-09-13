import React, { useState } from 'react';
import NavBar from '../../../HomePage/NavBar/NavBar';
import { useSelector } from 'react-redux';

const DashBoard = () => {
  const [selectedMenu, setSelectedMenu] = useState('Profile');

  const user = useSelector(state => state.user.value)

  const profile = {
  
    email: 'johndoe@example.com',
  
    address: '123 Farm Road, Green City',
  };

  const currentOrders = [
    { id: 1, product: 'Tower Rental', status: 'In Progress', date: '2024-09-01' },
    { id: 2, product: 'Herbs Subscription', status: 'Shipped', date: '2024-09-02' },
  ];

  const previousOrders = [
    { id: 1, product: 'Organic Vegetables', status: 'Delivered', date: '2024-08-15' },
    { id: 2, product: 'Fruit Basket', status: 'Delivered', date: '2024-08-10' },
  ];

  return (
    <>
    <NavBar />
    <div className="min-h-screen flex bg-white mt-36">
      {/* Sidebar */}
      <div className="w-64 bg-gray-200 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
        <ul>
          <li 
            className={`mb-4 cursor-pointer ${selectedMenu === 'Profile' ? 'text-green-500' : 'text-gray-700'}`}
            onClick={() => setSelectedMenu('Profile')}
          >
            Profile Details
          </li>
          <li 
            className={`mb-4 cursor-pointer ${selectedMenu === 'CurrentOrders' ? 'text-green-500' : 'text-gray-700'}`}
            onClick={() => setSelectedMenu('CurrentOrders')}
          >
            Current Orders
          </li>
          <li 
            className={`mb-4 cursor-pointer ${selectedMenu === 'PreviousOrders' ? 'text-green-500' : 'text-gray-700'}`}
            onClick={() => setSelectedMenu('PreviousOrders')}
          >
            Previous Orders
          </li>
          <li 
            className={`mb-4 cursor-pointer ${selectedMenu === 'Address' ? 'text-green-500' : 'text-gray-700'}`}
            onClick={() => setSelectedMenu('Address')}
          >
            Shipping Address
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h1>
        
        {selectedMenu === 'Profile' && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Details</h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-700"><strong>Name:</strong> {user.name}</p>
              <p className="text-gray-700"><strong>Email:</strong> {profile.email}</p>
              <p className="text-gray-700"><strong>Phone:</strong> {user.pass}</p>
              <p className="text-gray-700"><strong>Address:</strong> {profile.address}</p>
            </div>
          </div>
        )}

        {selectedMenu === 'CurrentOrders' && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Orders</h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              {currentOrders.length ? currentOrders.map(order => (
                <div key={order.id} className="mb-4 border-b pb-2">
                  <p className="text-gray-700"><strong>Product:</strong> {order.product}</p>
                  <p className="text-gray-700"><strong>Status:</strong> {order.status}</p>
                  <p className="text-gray-700"><strong>Date:</strong> {order.date}</p>
                </div>
              )) : <p className="text-gray-700">No current orders</p>}
            </div>
          </div>
        )}

        {selectedMenu === 'PreviousOrders' && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Previous Orders</h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              {previousOrders.length ? previousOrders.map(order => (
                <div key={order.id} className="mb-4 border-b pb-2">
                  <p className="text-gray-700"><strong>Product:</strong> {order.product}</p>
                  <p className="text-gray-700"><strong>Status:</strong> {order.status}</p>
                  <p className="text-gray-700"><strong>Date:</strong> {order.date}</p>
                </div>
              )) : <p className="text-gray-700">No previous orders</p>}
            </div>
          </div>
        )}

        {selectedMenu === 'Address' && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Shipping Address</h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-700">{profile.address}</p>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default DashBoard;
