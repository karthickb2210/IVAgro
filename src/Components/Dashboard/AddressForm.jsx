import React, { useState } from "react";
import axios from "axios";
import axiosInstance from "../../config/AxiosConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function AddressForm() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    mobileNumber: "",
    house: "",
    street: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [loading, setLoading] = useState(false);
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const addressDto = {
      name: userDetails.name,
      email: localStorage.getItem("name"),
      mobileNumber: userDetails.mobileNumber,
      house: userDetails.house,
      street: userDetails.street,
      address: userDetails.address,
      city: userDetails.city,
      state: userDetails.state,
      zip: userDetails.zip,
    };
    axiosInstance
      .post("/addAddress", addressDto)
      .then((res) => {
        console.log(res.data);
        if (res.data.data) {
          toast.success("Address added successfully");
          if (
            !sessionStorage.getItem("fromOrderCheckout") &&
            !sessionStorage.getItem("fromSubCheckout")
          ){
            sessionStorage.setItem("tab", "addresses");
          window.location.reload();
          }else if (sessionStorage.getItem("fromSubCheckout")) {
            sessionStorage.removeItem("fromSubCheckout");
            navigate("/subscription-checkout");
          }else{
            sessionStorage.removeItem("fromOrderCheckout")
            navigate("/cart/checkout")
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });

    // If the zip field is updated and has 6 digits, fetch address details
    if (name === "zip" && value.length === 6) {
      await fetchAddressDetails(value);
    }
  };

  // Fetch address details from India Post API
  const fetchAddressDetails = async (pinCode) => {
    setLoading(true);
    setError("");
    setAddressSuggestions([]);
    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pinCode}`
      );
      const data = response.data[0];

      if (data.Status === "Success") {
        setAddressSuggestions(data.PostOffice);
        // If there's only one post office, autofill the details
        if (data.PostOffice.length === 1) {
          const { Name, District, State } = data.PostOffice[0];
          setUserDetails((prevDetails) => ({
            ...prevDetails,
            address: Name,
            city: District,
            state: State,
          }));
        }
      } else {
        setError("Invalid PIN Code. Please enter a valid 6-digit PIN Code.");
      }
    } catch (err) {
      setError("Failed to fetch address details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handle selecting an address suggestion
  const handleSelectSuggestion = (suggestion) => {
    const { Name, District, State } = suggestion;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      address: Name,
      city: District,
      state: State,
    }));
    setAddressSuggestions([]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 flex flex-grow flex-col items-start justify-start"
    >
      <div>
        <h1 className=" text-xl font-semibold">
          Fill out the form to add address :
        </h1>
      </div>
      <div className=" w-full">
        <div className="w-2/4 my-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name :
          </label>
          <input
            type="name"
            id="name"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            className=" w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="w-2/4 my-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="mobileNumber"
          >
            Contact Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={userDetails.mobileNumber}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="w-2/4 my-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            House No.
          </label>
          <input
            type="text"
            id="house"
            name="house"
            value={userDetails.house}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="w-2/4 my-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Street Name
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={userDetails.street}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="w-2/4 my-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="zip"
          >
            PIN Code
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={userDetails.zip}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            maxLength="6"
            required
          />
          {loading && (
            <p className="text-sm text-blue-500 mt-2">
              Fetching address details...
            </p>
          )}
          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
        </div>

        {/* Address Suggestions Dropdown */}
        {addressSuggestions.length > 1 && (
          <div className="relative w-2/4 my-2">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="address"
            >
              Select Locality
            </label>
            <div className="mt-1 w-2/4 my-2">
              <select
                id="address"
                name="address"
                value={userDetails.address}
                onChange={(e) => {
                  const selectedSuggestion = addressSuggestions.find(
                    (sugg) => sugg.Name === e.target.value
                  );
                  handleSelectSuggestion(selectedSuggestion);
                }}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="" disabled>
                  -- Select Locality --
                </option>
                {addressSuggestions.map((suggestion, index) => (
                  <option key={index} value={suggestion.Name}>
                    {suggestion.Name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Address Fields */}
        {addressSuggestions.length <= 1 && (
          <>
            <div className="w-2/4 my-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </>
        )}
        <div className="w-2/4 my-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="city"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={userDetails.city}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
            readOnly
          />
        </div>
        <div className="w-2/4 my-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="state"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={userDetails.state}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
            readOnly
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 px-2 text-white py-2 rounded-lg font-semibold hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
      >
        Add Address
      </button>
    </form>
  );
}

export default AddressForm;
