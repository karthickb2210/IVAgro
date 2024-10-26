import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import EditAddress from "./EditAddress";
import { useState } from "react";

export const Addresses = ({ form, formfunction, addressDetails,setEditAddress,editAddress }) => {
  const [isEdit, setIsEdit] = useState(false);
  

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <div className=" flex relative">
        <h2 className="text-3xl font-semibold mb-6 text-green-700">
          📍 Addresses
        </h2>

        {!form ? (
          <>
            {" "}
            {!isEdit && (
              <button
                onClick={() => formfunction(true)}
                className="absolute right-2 bg-green-500 text-white rounded-md px-4 py-2"
              >
                Add Address
              </button>
            )}
          </>
        ) : (
          <button
            onClick={() => formfunction(false)}
            className="absolute right-2 bg-red-500 text-white rounded-md px-4 py-2"
          >
            Cancel
          </button>
        )}
      </div>
      {!form && !isEdit && (
        <div className="flex flex-col space-y-6">
        { addressDetails.length>0 ?  <>
          {addressDetails.map((address, index) => (
            <div
              key={address.addressId}
              className=" space-x-8 flex  flex-col items-center justify-center"
            >
              <AddressCard
                addressDetails={address}
                setIsEdit={setIsEdit}
                index={index}
                setEditAddress={setEditAddress}
              />
            </div>
          ))}
          </>
         : (<h2 className="text-3xl mt-12 font-semibold mb-8 text-green-700 text-center">
          🌱 You have no saved addresses....
        </h2>)
        }
        </div>
      )}
      {isEdit && (
        <EditAddress editAddress={editAddress} setIsEdit={setIsEdit} />
      )}

      {form && <AddressForm />}
    </div>
  );
};
