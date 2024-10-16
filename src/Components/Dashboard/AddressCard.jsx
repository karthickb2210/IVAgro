import React from 'react';

const AddressCard = ({ addressDetails,index }) => {
    console.log(addressDetails)
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Address Details {index+1}</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-2">
            <span className="font-semibold">House: </span>
            <span>{addressDetails.house || 'N/A'}</span>
          </div>
          <div className="w-full md:w-1/2 mb-2">
            <span className="font-semibold">Street: </span>
            <span>{addressDetails.street || 'N/A'}</span>
          </div>
          <div className="w-full md:w-1/2 mb-2">
            <span className="font-semibold">Locality: </span>
            <span>{addressDetails.address || 'N/A'}</span>
          </div>
          <div className="w-full md:w-1/2 mb-2">
            <span className="font-semibold">City: </span>
            <span>{addressDetails.city || 'N/A'}</span>
          </div>
          <div className="w-full md:w-1/2 mb-2">
            <span className="font-semibold">State: </span>
            <span>{addressDetails.state || 'N/A'}</span>
          </div>
          <div className="w-full md:w-1/2 mb-2">
            <span className="font-semibold">Zip: </span>
            <span>{addressDetails.zip || 'N/A'}</span>
          </div>
          <div className="w-full md:w-1/2 mb-2">
            <span className="font-semibold">Contact Number: </span>
            <span>{addressDetails.mobileNumber || 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
