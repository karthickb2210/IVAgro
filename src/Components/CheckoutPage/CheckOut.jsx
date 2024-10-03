import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "../HomePage/NavBar/NavBar"
import axiosInstance from '../../config/AxiosConfig';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const [guest,setGuest] = useState(false);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart)
    setCartItems(cart || []);
  }, []);

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    house: '',
    street:'',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [loading, setLoading] = useState(false);
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [error, setError] = useState('');

  // Handle input changes for all form fields
  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });

    // If the zip field is updated and has 6 digits, fetch address details
    if (name === 'zip' && value.length === 6) {
      await fetchAddressDetails(value);
    }
  };

  // Fetch address details from India Post API
  const fetchAddressDetails = async (pinCode) => {
    setLoading(true);
    setError('');
    setAddressSuggestions([]);
    try {
      const response = await axios.get(`https://api.postalpincode.in/pincode/${pinCode}`);
      const data = response.data[0];

      if (data.Status === 'Success') {
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
        setError('Invalid PIN Code. Please enter a valid 6-digit PIN Code.');
      }
    } catch (err) {
      setError('Failed to fetch address details. Please try again later.');
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

  const [amount, setAmount] = useState(0);

  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Order Placed:', userDetails);
  //   console.log('Cart Items:', cartItems);
  //   toast.success("Your Order has been Booked");
  //   setTimeout(()=>{
  //     navigate("/")
  //   },2000);
  //   // Add logic to handle order placement
  // };

  const totalAmount = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  // Calculate shipping charge
  const shippingCharge = totalAmount < 500 ? 120 : 0;
  const finalAmount = totalAmount + shippingCharge;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call your backend API to create the order
      const { data } = await axiosInstance.post('/create-order', { amount: (finalAmount.toFixed(2)) * 100 }); // Amount in paise

      // Open Razorpay checkout
      const options = {
        key: 'rzp_test_wbXDO68U56KR2k',
        amount: data.amount,
        currency: 'INR',
        name: 'IronValley Agronomy',
        description: 'Test Transaction',
        image: 'https://your-logo-url.com/logo.png',
        order_id: data.id,
        handler: function (response) {
          alert("Payment ID: " + response.razorpay_payment_id);
          alert("Order ID: " + response.razorpay_order_id);
          alert("Signature: " + response.razorpay_signature);

          // Verify the payment on the backend
          axiosInstance.post('/verify-payment', {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }).then((res) => {
            alert('Payment verified successfully');
          }).catch((err) => {
            console.log(err)
            alert('Payment verification failed');
          });
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error: ", error);
      alert('Payment failed');
    }
  };

  return (
    <>
    <NavBar />
    <div className="min-h-screen mt-16 bg-gradient-to-r from-blue-50 to-blue-200 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Checkout Your Cart</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cart Details */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Your Cart</h3>
            <div className="space-y-3">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid justify-items-stretch grid-flow-col bg-white p-3 rounded-lg shadow-sm"
                  >
                  <img className='h-16 w-16 rounded-xl '  src={item.image} alt='product image' />
                  <div className=' justify-self-start content-center'>
                    <div className="flex flex-col ">
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      <span className="text-sm text-gray-500">Quantity: {item.quantity}</span>
                      <span className="text-sm text-gray-500">Weight: {item.grams} grams</span>
                    </div>
                    </div>
                    <span className="text-lg font-semibold text-gray-700 justify-self-end  content-center">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              )}
            </div>
            
          </div>

          {/* User Details Form */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md relative">
          {cartItems.length > 0 && (
              <>
              <h1 className='text-xl font-semibold mb-4 text-gray-700'>Cart Value</h1>
                <hr className="my-4" />
                <div className="flex justify-between text-lg font-semibold text-gray-700">
                  <span>Subtotal</span>
                  <span>₹ {totalAmount.toFixed(2)}</span>
                </div>
                <div
                  className={`flex justify-between text-lg font-semibold ${
                    totalAmount >= 500 ? 'text-green-600' : 'text-gray-700'
                  }`}
                >
                  <span>Shipping Charge</span>
                  <span>₹ {shippingCharge.toFixed(2)}</span>
                </div>
                {totalAmount < 500 && (
                  <div className="text-sm text-gray-600 mt-2">
                    <p>Note: Shipping charge of ₹120 applies for orders below ₹500.</p>
                  </div>
                )}
                <hr className="my-4" />
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span>₹ {finalAmount.toFixed(2)}</span>
                </div>
              </>
            )}
            <div className='flex items-center justify-center my-12 space-x-10'>
            <button className='bg-blue-500 px-4 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200'>Login</button>
            <button className='bg-blue-500 px-4 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200'>Check out as guest</button>
            </div>
            {guest && <>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Shipping Information</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
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
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
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
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="zip">
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
                {loading && <p className="text-sm text-blue-500 mt-2">Fetching address details...</p>}
                {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
              </div>

              {/* Address Suggestions Dropdown */}
              {addressSuggestions.length > 1 && (
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="address">
                    Select Locality
                  </label>
                  <div className="mt-1">
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
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="address">
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
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="city">
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
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="state">
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
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                disabled={cartItems.length === 0}
              >
                Proceed To Pay
              </button>
              {cartItems.length === 0 && (
                <p className="text-sm text-red-500 mt-2 text-center">
                  Your cart is empty. Add items to place an order.
                </p>
              )}
            </form>
            </>}
          </div>
        </div>
      </div>
    </div></>
  );
};

export default CheckOut;
