import AddressCard from "./AddressCard";
import Address from "./Address";
import EditAddress from "./EditAddress";
import { useState } from "react";

export const Addresses = ({ form, formfunction, addressDetails}) => {

    const [isEdit,setIsEdit] = useState(false);
    const [editAddress,setEditAddress] =useState({});

    return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <div className=" flex relative">
        <h2 className="text-3xl font-semibold mb-6 text-green-700">
          📍 Addresses
        </h2>
  
        {!form ? <> {!isEdit && ( 
          <button
            onClick={() => formfunction(true)}
            className="absolute right-2 bg-green-500 rounded-md px-4 py-2"
          >
            Add Address
          </button>
        ) 
        }</>: (
          <button
            onClick={() => formfunction(false)}
            className="absolute right-2 bg-red-500 rounded-md px-4 py-2"
          >
            Cancel
          </button>
        )}
      </div>
      {!form && !isEdit  && (
        <div className="flex flex-col space-y-6">
          {addressDetails.map((address, index) => (
            <div
              key={address.addressId}
              className=" space-x-8 flex flex-col items-center justify-center"
            >
              <AddressCard addressDetails={address} setIsEdit={setIsEdit} index={index} setEditAddress={setEditAddress}  />
            </div>
          ))}
        </div>
      )}
      {isEdit && 
      <EditAddress editAddress={editAddress} setIsEdit={setIsEdit}  />
      }
  
      {form && <Address />}
    </div>
  );

}
  