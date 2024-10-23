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
import Settings from "./Settings";
import Profile from "./Profile";
import Subscriptions from "./Subscriptions";
import { Orders } from "./Orders";


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





export default Dashboard;
