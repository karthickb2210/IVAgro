import React, { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaHome,
  FaLeaf,
  FaShoppingCart,
  FaCog,
} from "react-icons/fa";
import { BsArrowRightSquareFill } from "react-icons/bs";
import axiosInstance from "../../config/AxiosConfig";
import NavBar from "../HomePage/NavBar/NavBar";
import LeavesLoader from "../Loader/PlantLoader";
import { Box, Button, Drawer } from "@mui/material";
import Address from "./Address";
import AddressCard from "./AddressCard";
import { toast } from "react-toastify";

function Dashboard() {
  const [activeTab, setActiveTab] = useState(
    sessionStorage.getItem("tab") ? sessionStorage.getItem("tab") : "profile"
  );
  const [profileDetails, setprofileDetails] = useState();
  const [subscriptionDetails, setSubscriptionDetails] = useState();
  const [orderDetails, setOrderDetails] = useState();
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [addressDetails, setAddressDetails] = useState();

  useEffect(() => {
    if (sessionStorage.getItem("tab")) {
      setTimeout(() => {
        sessionStorage.removeItem("tab");
      }, 1000);
    }
    const name = localStorage.getItem("name");
    axiosInstance
      .get(`/getDashDetails/${name}`)
      .then((res) => {
        console.log(res.data)
        setAddressDetails(res.data.data.addressDetails);
        setprofileDetails(res.data.data.profileDetails);
        setSubscriptionDetails(res.data.data.subscriptionDetails);
        setOrderDetails(res.data.data.orderDetails);
      })
      .catch((err) => {
        toast.error("Connection Issues");
        console.log(err);
      });

    const checkScreenSize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileScreen(false);
      } else {
        setIsMobileScreen(true);
      }
    };
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  //Drawer
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="mt-[10vh]">
        <div className="w-64 bg-white shadow-2xl p-3 items-center">
          <h2 className="text-2xl font-bold mb-10 text-green-800">
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
      </div>
    </Box>
  );
  return (
    <>
      <NavBar />
      {!profileDetails ? (
        <LeavesLoader />
      ) : (
        <div className="min-h-screen bg-gradient-to-r mt-36 from-green-100 to-green-50 flex">
          {/* Sidebar */}
          {!isMobileScreen && (
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
          )}

          {/* Main Content */}
          {profileDetails && (
            <div className="flex-1 p-8 bg-white rounded-l-lg shadow-lg">
              {activeTab === "profile" && <Profile data={profileDetails} />}
              {activeTab === "addresses" && (
                <Addresses
                  form={showForm}
                  formfunction={setShowForm}
                  addressDetails={addressDetails}
                />
              )}
              {activeTab === "subscriptions" && (
                <Subscriptions subscriptionDetails={subscriptionDetails} />
              )}
              {activeTab === "orders" && <Orders orderDetails={orderDetails} />}
              {activeTab === "settings" && <Settings />}
            </div>
          )}
        </div>
      )}

      {isMobileScreen && (
        <div className=" fixed bg-gray-400 rounded-e-md top-[29vh]  ">
          <Button onClick={toggleDrawer(true)}>
            <BsArrowRightSquareFill color="green" size={"2rem"} />
            <span className="ml-2 text-black">Menu </span>
          </Button>
        </div>
      )}

      <section>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </section>
    </>
  );
}

const Profile = ({ data }) => (
  <div className="bg-white p-6  shadow-md rounded-lg">
    <h2 className="sm:text-3xl text-2xl font-semibold mb-6 text-green-700">
      👤 User Profile
    </h2>
    <div className="flex items-center mb-4">
      <img
        src="https://t3.ftcdn.net/jpg/06/33/54/78/240_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg"
        alt="Profile"
        className="sm:w-24 w-20  object-contain rounded-full mr-4 shadow-lg"
      />
      <div>
        <h3 className="sm:text-xl text-lg font-bold text-green-800">
          {data.username}
        </h3>
        {/* <p className="text-green-600 text-wrap">jane.greenfield@plantlife.com</p> */}
      </div>
    </div>
    <div className="mt-6">
      <h4 className="text-green-700 font-medium sm:font-semibold mb-2">
        Email : {data.mail}{" "}
      </h4>
      <h4 className="text-green-700 font-medium sm:font-semibold mb-2">
        Mobile Number :{" "}
        {!data.mobileNumber === " " ? data.mobileNumber : "Not Updated Yet.."}
      </h4>
    </div>
  </div>
);

const Addresses = ({ form, formfunction, addressDetails }) => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <div className=" flex relative">
      <h2 className="text-3xl font-semibold mb-6 text-green-700">
        📍 Addresses
      </h2>

      {!form ? (
        <button
          onClick={() => formfunction(true)}
          className="absolute right-2 bg-green-500 rounded-md px-4 py-2"
        >
          Add Address
        </button>
      ) : (
        <button
          onClick={() => formfunction(false)}
          className="absolute right-2 bg-red-500 rounded-md px-4 py-2"
        >
          Cancel
        </button>
      )}
    </div>
    {!form && (
      <div>
        {addressDetails.map((address, index) => (
          <div
            key={address.addressId}
            className=" space-x-8 flex flex-col items-center justify-center"
          >
            <AddressCard addressDetails={address} index={index} />
          </div>
        ))}
      </div>
    )}

    {form && <Address />}
  </div>
);

const Subscriptions = ({ subscriptionDetails }) => (
  <div className="bg-white p-8 shadow-lg rounded-lg">
    {!subscriptionDetails[0] ? (
      <h2 className="text-3xl font-semibold mb-8 text-green-700 text-center">
        🌱 You have no Subscriptions plans active....
      </h2>
    ) : (
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-green-700 text-center">
        🌱 Subscriptions
      </h2>
    )}
    {subscriptionDetails.map((subscription, index) => (
      <div
        key={subscription.subscriptionId}
        className="mb-6 p-6 bg-gray-50 rounded-lg shadow-sm transition-shadow hover:shadow-md"
      >
        <h3 className="text-green-700 text-xl lg:text-2xl font-bold mb-2 sm:mb-4 flex justify-between items-center">
          Subscription {index + 1}
          <span className="text-sm lg:text-lg font-medium text-green-600">
            {subscription.subscriptionType}
          </span>
        </h3>

        <div className="border-t border-green-200 pt-2 sm:pt-4">
          <ul className="list-disc list-inside">
            {subscription.subscriptionDetails.map((detail, idx) => (
              <li key={idx} className="text-green-600 lg:text-lg sm:mb-2 mb-1">
                <strong>{detail.product_name}</strong> - Quantity:{" "}
                {detail.quantity} grams
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:mt-4 mt-2 border-t border-green-200 pt-4">
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

const Orders = ({ orderDetails }) => (
  <div className="bg-white p-8 shadow-lg rounded-lg">
    {!orderDetails[0] ? (
      <h2 className="text-3xl font-semibold mb-8 text-green-700 text-center">
        🌱 You have no order history....
      </h2>
    ) : (
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-green-700 text-center">
        🌱 Orders
      </h2>
    )}
    {orderDetails.map((order, index) => (
      <div
        key={order.orderId}
        className="mb-3 sm:mb-6 p-6 bg-gray-50 rounded-lg shadow-sm transition-shadow hover:shadow-md"
      >
        <h3 className="text-green-700 text-xl lg:text-2xl font-bold mb-2 sm:mb-4 flex justify-between items-center">
          Order {index + 1}
          <div
            className={`p-1 px-2 border justify-end text-xl rounded-lg text-center ${
              order.delivered

                ? "bg-green-200 border-green-400"
                : "bg-red-200 border-red-400"
            }`}
          >
            {order.delivered
              ? (
              <h6 className="text-green-700">
                Delivered
              </h6>
            ) : (
              <h6 className="text-red-700">
                Not Delivered
              </h6>
            )}
          </div>
          {/* <span className="text-sm lg:text-lg font-medium text-green-600">
           Porter Tracking Id :  {order.porterTrackerId}
          </span> */}
        </h3>

        <div className="border-t border-green-200 pt-4">
          <ul className="list-disc list-inside">
            {order.orderDetails.map((detail, idx) => (
              <li key={idx} className="text-green-600 lg:text-lg mb-1 sm:mb-2">
                <strong>{detail.itemName}</strong> - Quantity:{" "}
                {detail.itemGrams} grams
              </li>
            ))}
          </ul>
        </div>
          <div className="sm:mt-4 mt-2 border-t border-green-200 sm:pt-4 pt-2 justify-start">
          <p className="text-gray-700 mb-1">
            <strong>Porter Tracking Id:</strong> {(order.porterTrackerId==="0"|| order.porterTrackerId==null) ? "Not Shipped Yet..." : `${order.porterTrackerId}`}
          </p>
            <p className="text-gray-700 mb-1">
              <strong>Order on:</strong> {order.createdAt.substring(0, 10)}
            </p>
            
          </div>
          
        
      </div>
    ))}
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
