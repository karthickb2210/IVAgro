import React, { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaHome,
  FaLeaf,
  FaShoppingCart,
  FaCog,
} from "react-icons/fa";
import axiosInstance from "../../config/AxiosConfig";
import NavBar from "../HomePage/NavBar/NavBar";
import LeavesLoader from "../Loader/PlantLoader";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileDetails, setprofileDetails] = useState();
  const [subscriptionDetails, setSubscriptionDetails] = useState();

  useEffect(() => {
    const name = localStorage.getItem("name");
    axiosInstance
      .get(`/getDashDetails/${name}`)
      .then((res) => {
        setprofileDetails(res.data.data.profileDetails);
        setSubscriptionDetails(res.data.data.subscriptionDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <NavBar />
    {!profileDetails ? <LeavesLoader /> :
      <div className="min-h-screen bg-gradient-to-r mt-36 from-green-100 to-green-50 flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-2xl p-6">
          <h2 className="text-3xl font-bold mb-10 text-green-800">
            🌿 DashBoard
          </h2>
          <nav>
            <ul>
              <li
                onClick={() => setActiveTab("profile")}
                className={`p-4 mb-4 cursor-pointer rounded-lg flex items-center space-x-3 transition ${
                  activeTab === "profile"
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-200"
                }`}
              >
                <FaUserCircle className="text-xl" />
                <span>Profile</span>
              </li>
              <li
                onClick={() => setActiveTab("addresses")}
                className={`p-4 mb-4 cursor-pointer rounded-lg flex items-center space-x-3 transition ${
                  activeTab === "addresses"
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-200"
                }`}
              >
                <FaHome className="text-xl" />
                <span>Addresses</span>
              </li>
              <li
                onClick={() => setActiveTab("subscriptions")}
                className={`p-4 mb-4 cursor-pointer rounded-lg flex items-center space-x-3 transition ${
                  activeTab === "subscriptions"
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-200"
                }`}
              >
                <FaLeaf className="text-xl" />
                <span>Subscriptions</span>
              </li>
              <li
                onClick={() => setActiveTab("orders")}
                className={`p-4 mb-4 cursor-pointer rounded-lg flex items-center space-x-3 transition ${
                  activeTab === "orders"
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-200"
                }`}
              >
                <FaShoppingCart className="text-xl" />
                <span>Orders</span>
              </li>
              <li
                onClick={() => setActiveTab("settings")}
                className={`p-4 cursor-pointer rounded-lg flex items-center space-x-3 transition ${
                  activeTab === "settings"
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-200"
                }`}
              >
                <FaCog className="text-xl" />
                <span>Settings</span>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        {profileDetails && (
          <div className="flex-1 p-8 bg-white rounded-l-lg shadow-lg">
            {activeTab === "profile" && <Profile data={profileDetails} />}
            {activeTab === "addresses" && <Addresses />}
            {activeTab === "subscriptions" && (
              <Subscriptions subscriptionDetails={subscriptionDetails} />
            )}
            {activeTab === "orders" && <Orders />}
            {activeTab === "settings" && <Settings />}
          </div>
        )}
      </div>
    }

    </>
    
  );
}

const Profile = ({ data }) => (
  <div className="bg-white p-6  shadow-md rounded-lg">
    <h2 className="text-3xl font-semibold mb-6 text-green-700">
      👤 User Profile
    </h2>
    <div className="flex items-center mb-4">
      <img
        src="https://t3.ftcdn.net/jpg/06/33/54/78/240_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg"
        alt="Profile"
        className="w-24 object-contain h-24 rounded-full mr-4 shadow-lg"
      />
      <div>
        <h3 className="text-xl font-bold text-green-800">{data.username}</h3>
        {/* <p className="text-green-600 text-wrap">jane.greenfield@plantlife.com</p> */}
      </div>
    </div>
    <div className="mt-6">
      <h4 className="text-green-700 font-semibold mb-2">
        Email : {data.mail}{" "}
      </h4>
      <h4 className="text-green-700 font-semibold mb-2">
        Mobile Number : {data.mobileNumber}
      </h4>
    </div>
  </div>
);

const Addresses = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-3xl font-semibold mb-6 text-green-700">📍 Addresses</h2>
    <div className="mb-6">
      <h4 className="font-semibold text-green-800">Home Address</h4>
      <p className="text-green-600">789 Eco Street, Nature City, CA 90210</p>
    </div>
    <div>
      <h4 className="font-semibold text-green-800">Billing Address</h4>
      <p className="text-green-600">
        123 Green Lane, Sustainable Town, CA 95014
      </p>
    </div>
  </div>
);

const Subscriptions = ({ subscriptionDetails }) => (
  <div className="bg-white p-8 shadow-lg rounded-lg">
  {!subscriptionDetails[0] ? 
   <h2 className="text-3xl font-semibold mb-8 text-green-700 text-center">
      🌱 You have no Subscriptions plans active....
    </h2>
 : 
    <h2 className="text-3xl font-semibold mb-8 text-green-700 text-center">
      🌱 Subscriptions
    </h2>
}
    {subscriptionDetails.map((subscription, index) => (
      <div
        key={subscription.subscriptionId}
        className="mb-6 p-6 bg-gray-50 rounded-lg shadow-sm transition-shadow hover:shadow-md"
      >
        <h3 className="text-green-700 text-2xl font-bold mb-4 flex justify-between items-center">
          Subscription {index+1}
          <span className="text-lg font-medium text-green-600">
            {subscription.subscriptionType}
          </span>
        </h3>

        <div className="border-t border-green-200 pt-4">
          <ul className="list-disc list-inside">
            {subscription.subscriptionDetails.map((detail, idx) => (
              <li key={idx} className="text-green-600 text-lg mb-2">
                <strong>{detail.product_name}</strong> - Quantity:{" "}
                {detail.quantity} grams
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 border-t border-green-200 pt-4">
          <p className="text-gray-700 mb-1">
            <strong>Subscribed on:</strong>{" "}
            {subscription.createdAt.substring(0, 10)}
          </p>
           <p className="text-gray-700 mb-1">
            <strong>Box Size :</strong> {subscription.boxSize} grams
          </p>
          {/*<p className="text-gray-700 mb-1">
            <strong>Signature:</strong> {subscription.signature}
          </p> */}
        </div>
      </div>
    ))}
  </div>
);

const Orders = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-3xl font-semibold mb-6 text-green-700">🛒 Orders</h2>
    <table className="w-full text-left">
      <thead>
        <tr className="bg-green-100 text-green-600">
          <th className="p-2">Order ID</th>
          <th className="p-2">Date</th>
          <th className="p-2">Status</th>
          <th className="p-2">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2">98765</td>
          <td className="p-2">October 1, 2024</td>
          <td className="p-2 text-green-500">Shipped</td>
          <td className="p-2">$49.99</td>
        </tr>
        <tr>
          <td className="p-2">87654</td>
          <td className="p-2">September 22, 2024</td>
          <td className="p-2 text-green-500">Delivered</td>
          <td className="p-2">$89.99</td>
        </tr>
        <tr>
          <td className="p-2">76543</td>
          <td className="p-2">September 10, 2024</td>
          <td className="p-2 text-green-500">Delivered</td>
          <td className="p-2">$39.99</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Settings = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-3xl font-semibold mb-6 text-green-700">⚙️ Settings</h2>
    <div className="mb-6">
      <h4 className="font-semibold text-green-800">Change Password</h4>
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 mt-2 rounded-lg transition">
        Update Password
      </button>
    </div>
    <div>
      <h4 className="font-semibold text-green-800">Notification Preferences</h4>
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 mt-2 rounded-lg transition">
        Update Preferences
      </button>
    </div>
  </div>
);

export default Dashboard;
