import React, { useState, useEffect, useContext } from "react";
import NavBar from "../HomePage/NavBar/NavBar";
import axiosInstance from "../../config/AxiosConfig";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CartContext from "../Shop/store/CartContext";
import LeavesLoader from "../Loader/PlantLoader";
import AddressRadioCard from "./AddressRadioCard";
import UserProgressContext from "../Shop/store/UserProgressContext";
import { CheckCircleIcon } from '@heroicons/react/outline'; 

const CheckOut = () => {
  const cartCtx = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [addressDetails, setAddressDetails] = useState([]);
  const [showAddress, setShowAddress] = useState();
  const navigate = useNavigate();
  const [guest, setGuest] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  const userProgressCtx = useContext(UserProgressContext);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    if (localStorage.getItem("name")) {
      setGuest(false);
    }
    axiosInstance
      .get(`/getAllAddress/${localStorage.getItem("name")}`)
      .then((res) => {
        console.log(res.data);
        setAddressDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setCartItems(cart || []);

    if (showAnimation) {
      const timer = setTimeout(() => setShowAnimation(false), 4000); // Display duration
      return () => clearTimeout(timer);
  }
  }, [showAnimation]);

  const [selectedAddressIndex, setSelectedAddressIndex] = useState(-1);

  const handleSelect = (index) => {
    setSelectedAddressIndex(index);
  };

  const totalAmount = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  // Calculate shipping charge
  const shippingCharge = totalAmount < 499 ? 120 : 0;
  const finalAmount = totalAmount + shippingCharge;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Call your backend API to create the order
      const { data } = await axiosInstance.post("/create-order", {
        amount: finalAmount.toFixed(2) * 100,
      }); // Amount in paise

      // Open Razorpay checkout
      const options = {
        key: "rzp_test_VIg1NaXkrCS4Lx",
        amount: data.amount,
        currency: "INR",
        name: "IronValley Agronomy",
        description: "Test Transaction",
        image: "/logo.png",
        order_id: data.id,
        handler: function (response) {
          const razorpay_creds = {
            razor_pay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          // Verify the payment on the backend
          axiosInstance
            .post("/verify-payment", razorpay_creds)
            .then((res) => {
              if (res.data) {
                var stockDeductions = {
                  babySpinachQuantityDetections: 0,
                  pakChoiQuantityDetections: 0,
                  basilQuantityDetections: 0,
                  kaleQuantityDetections: 0,
                  lettuceQuantityDetections: 0,
                };
                console.log(cartItems);
                cartItems.map((item) => {
                  if (item.id === "m1") {
                    stockDeductions.babySpinachQuantityDetections =
                      item.grams * item.quantity +
                      stockDeductions.babySpinachQuantityDetections;
                  } else if (item.id === "m7") {
                    stockDeductions.pakChoiQuantityDetections =
                      item.grams * item.quantity +
                      stockDeductions.pakChoiQuantityDetections;
                  } else if (item.id === "m8") {
                    stockDeductions.kaleQuantityDetections =
                      item.grams * item.quantity +
                      stockDeductions.kaleQuantityDetections;
                  } else if (item.id === "m5") {
                    stockDeductions.lettuceQuantityDetections =
                      item.grams * item.quantity +
                      stockDeductions.lettuceQuantityDetections;
                  } else {
                    stockDeductions.basilQuantityDetections =
                      item.grams * item.quantity +
                      stockDeductions.basilQuantityDetections;
                  }
                });
                console.log(stockDeductions);
                axiosInstance
                  .post("/updateStocks", stockDeductions)
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });

                var orderDetails = [];
                cartItems.map((item) => {
                  const tempOrder = {
                    itemName: item.name,
                    itemQuantity: item.quantity,
                    itemGrams: item.grams,
                  };
                  orderDetails.push(tempOrder);
                });
                console.log("Order Details", orderDetails);
                console.log("Address");
                const order = {
                  email: localStorage.getItem("name"),
                  orderDetails: orderDetails,
                  addressDetails: addressDetails[selectedAddressIndex],
                  paymentId: response.razorpay_payment_id,
                  amountPaid: finalAmount.toFixed(2),
                };
                console.log("Order", order);
                axiosInstance
                  .post("/addOrder", order)
                  .then((res) => {
                    console.log(res.data.statusCode);
                    if (res.data.statusCode === 200) {
                      toast.success("Order placed successfully");
                      cartCtx.clearCart();
                      localStorage.removeItem("cart");
                      setShowAnimation(true);
                      setTimeout(()=>{
                        navigate("/");
                      },3000)
                      
                      
                    } else {
                      toast.warn("Problem occured while placing order");
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            })
            .catch((err) => {
              toast.error("Payment Failed", err);
            });
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error: ", error);
      alert("Payment failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditCart =()=>{
    userProgressCtx.showCart();
  }

  return (
    <>
      <NavBar />
      {isLoading ? (
        <LeavesLoader />
      ) : (
        <div className="relative min-h-screen mt-32 bg-gradient-to-r from-blue-50 to-blue-200 flex items-center justify-center p-6">
        {showAnimation && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 backdrop-blur-sm">
                    {/* Main Container */}
                    <div className="relative bg-white p-6 rounded-lg shadow-2xl transform transition duration-500 ease-out animate-slide-in-up">
                        
                        {/* Ribbon Animation */}
                        <div className="absolute -top-6 -left-8 w-36 h-10 bg-yellow-400 rounded-full animate-ribbon-fly" />

                        {/* Check Icon and Text */}
                        <div className="flex flex-col items-center">
                            <CheckCircleIcon className="w-12 h-12 text-green-500 animate-pop" />
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 animate-fade-in">
                                Order Placed Successfully!
                            </h2>
                            <p className="text-gray-500 animate-fade-in">Thank you for your purchase.</p>
                        </div>

                        {/* Confetti */}
                        <div className="absolute -top-10 left-2 w-2 h-2 bg-red-500 rounded-full animate-confetti-burst" />
                        <div className="absolute -top-10 right-2 w-2 h-2 bg-blue-500 rounded-full animate-confetti-burst delay-100" />
                        <div className="absolute -bottom-10 left-8 w-2 h-2 bg-green-500 rounded-full animate-confetti-burst delay-200" />
                        <div className="absolute -bottom-10 right-8 w-2 h-2 bg-yellow-500 rounded-full animate-confetti-burst delay-300" />
                    </div>
                </div>
            )}
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
              Checkout Your Cart
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cart Details */}
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className=" flex items-center justify-between">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Your Cart
                </h3>
                <button onClick={handleEditCart} className=" bg-teal-700 px-4 py-1 mb-4 text-white rounded-md">Edit Cart</button>
                </div>
                <div className="space-y-3">
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="grid justify-items-stretch grid-flow-col bg-white p-3 rounded-lg shadow-sm"
                      >
                        <img
                          className="h-16 w-16 rounded-xl "
                          src={item.image}
                          alt="product image"
                        />
                        <div className=" justify-self-start content-center">
                          <div className="flex flex-col ">
                            <h4 className="font-medium text-gray-800">
                              {item.name}
                            </h4>
                            <span className="text-sm text-gray-500">
                              Quantity: {item.quantity}
                            </span>
                            <span className="text-sm text-gray-500">
                              Weight: {item.grams} grams
                            </span>
                          </div>
                        </div>
                        <span className="text-lg font-semibold text-gray-700 justify-self-end  content-center">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-500">
                      Your cart is empty.
                    </p>
                  )}
                

                </div>
              </div>

              {/* User Details Form */}
              <div className="bg-gray-100 p-4 rounded-lg shadow-md relative">
                {cartItems.length > 0 && (
                  <>
                    <h1 className="text-xl font-semibold mb-4 text-gray-700">
                      Cart Value
                    </h1>
                    <hr className="my-4" />
                    <div className="flex justify-between text-lg font-semibold text-gray-700">
                      <span>Subtotal</span>
                      <span>₹ {totalAmount.toFixed(2)}</span>
                    </div>
                    <div
                      className={`flex justify-between flex-col text-lg font-semibold ${
                        totalAmount >= 499 ? "text-green-600" : "text-gray-700"
                      }`}
                    >
                    <div className="flex justify-between">
                      <span>Shipping Charge</span>
                      <span>₹ {shippingCharge.toFixed(2)}</span>
                    </div>
                    {shippingCharge===0 && 
                      <div className=" flex justify-between" >
                      <span>You saved</span>
                      <span>₹ 120</span>
                      </div>}
                    </div>

                    <div className="text-sm text-gray-600 mt-2">
                      <p>
                        Note: Shipping charge of ₹120 applies for orders below
                        ₹499.
                      </p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between text-xl font-bold text-gray-800">
                      <span>Total</span>
                      <span>₹ {finalAmount.toFixed(2)}</span>
                    </div>
                  </>
                )}
                <div className="flex items-center justify-center my-12 space-x-10">
                  {!guest ? (
                    <>
                      {!showAddress ? (
                        <button
                          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                          disabled={cartItems.length === 0}
                          onClick={() => setShowAddress(true)}
                        >
                          Select Address
                        </button>
                      ) : (
                        <p className="text-start text-md font-semibold">
                          Select an Address below
                        </p>
                      )}
                    </>
                  ) : (
                    <Link to={`/register`}>
                      <button
                        onClick={() =>
                          sessionStorage.setItem("fromOrdersLogin", true)
                        }
                        className="w-full bg-blue-500 text-white py-2 px-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                      >
                        Login to proceed
                      </button>
                    </Link>
                  )}
                </div>
                {showAddress && (
                  <>
                    <Link to={`/dash`}>
                      <button
                        onClick={() => {
                          sessionStorage.setItem("fromOrderCheckout", true);
                          sessionStorage.setItem("tab", "addresses");
                          sessionStorage.setItem("addForm",true)
                        }}
                        className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                      >
                        Add new Address
                      </button>
                    </Link>

                    <>
                      {showAddress && (
                        <div className="max-w-md mx-auto mt-8">
                          {addressDetails.map((address, index) => (
                            <AddressRadioCard
                              key={index}
                              address={address}
                              selected={selectedAddressIndex === index}
                              onSelect={() => handleSelect(index)}
                            />
                          ))}
                        </div>
                      )}
                    </>
                  </>
                )}
                {showAddress &&
                  !addressDetails.length == 0 &&
                  !(selectedAddressIndex === -1) && (
                    <button
                      className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                      onClick={handleSubmit}
                    >
                      Proceed to Pay
                    </button>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckOut;
