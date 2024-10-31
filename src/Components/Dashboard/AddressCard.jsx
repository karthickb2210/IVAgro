import React, { useDebugValue, useEffect, useState } from "react";
import axiosInstance from "../../config/AxiosConfig";
import { toast } from "sonner";

const AddressCard = ({ addressDetails, index, setEditAddress, setIsEdit }) => {
  const [loading, setLoading] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

    if(sessionStorage.getItem("addressId")){
      if(sessionStorage.getItem("addressId")==addressDetails.addressId){
      setIsEdit(true)
      setEditAddress(addressDetails)
      sessionStorage.removeItem("addressId")
      }
    }

  const handleDelete = () => {
    setLoading(true);
    axiosInstance
      .delete(`/deleteAddress/${addressDetails.addressId}`)
      .then((res) => {
        if (res.data.flag) {
          toast.success("Address deleted successfully");
          sessionStorage.setItem("tab", "addresses");
          window.location.reload();
        }
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
    {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Confirm Delete
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this address?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={` ${loading && "blur"} max-w-4xl mx-auto p-6 bg-white border shadow-md rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6`}>
        <div className="flex-1">
          <div className=" flex justify-between items-center">
            <h2 className="text-2xl font-bold mb-4">Address {index + 1}</h2>
          </div>

          <div className="flex flex-wrap mb-2">
            <div className="w-full md:w-1/2 mb-2">
              <span className="font-semibold">House: </span>
              <span>{addressDetails.house || "N/A"}</span>
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <span className="font-semibold">Street: </span>
              <span>{addressDetails.street || "N/A"}</span>
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <span className="font-semibold">Locality: </span>
              <span>{addressDetails.address || "N/A"}</span>
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <span className="font-semibold">City: </span>
              <span>{addressDetails.city || "N/A"}</span>
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <span className="font-semibold">State: </span>
              <span>{addressDetails.state || "N/A"}</span>
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <span className="font-semibold">Zip: </span>
              <span>{addressDetails.zip || "N/A"}</span>
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <span className="font-semibold">Contact Number: </span>
              <span>{addressDetails.mobileNumber || "N/A"}</span>
            </div>
          </div>
          <div className=" flex space-x-6">
            <button
              onClick={toggleModal}
              className=" bg-red-700 text-white rounded-xl w-1/2 px-1 py-2"
            >
              Delete Address
            </button>
            <button
              onClick={() => {
                setIsEdit(true);
                setEditAddress(addressDetails);
              }}
              className="bg-teal-800 text-white px-1 py-2  rounded-xl w-1/2"
            >
              {" "}
              Edit Address
            </button>
          </div>
        </div>
      </div>
      </>
  );
};

export default AddressCard;
