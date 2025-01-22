import React, { useState, useEffect } from "react";
import axiosInstance from "../../config/AxiosConfig";
import { toast } from "sonner";
import { useNavigate, Link } from "react-router-dom";
import LeavesLoader from "../Loader/PlantLoader";
import AddressRadioCardForSub from "./AddressRadioCardForSub";

const SubscriptionCheckOut = () => {
  const [cartItems, setCartItems] = useState([]);
  const [guest, setGuest] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [addressDetails, setAddressDetails] = useState([]);
  const [showAddress, setShowAddress] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(sessionStorage.getItem("subbox"));
    if (localStorage.getItem("name")) {
      setGuest(false);
    }
    axiosInstance
      .get(`/getAllAddress/${localStorage.getItem("name")}`)
      .then((res) => {
        setAddressDetails(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
    setCartItems(cart || []);
  }, []);

  const [selectedAddressIndex, setSelectedAddressIndex] = useState(-1);

  const handleSelect = (index) => {
    setSelectedAddressIndex(index);
  };

  const prices = [199, 299, 399];

  const boxSize = sessionStorage.getItem("boxsize");
  const subscriptionType = sessionStorage.getItem("subscriptionType");

  let totalAmount = 0;
  if (boxSize == 100) {
    totalAmount = prices[0];
  } else if (boxSize == 250) {
    totalAmount = prices[1];
  } else {
    totalAmount = prices[2];
  }

  // Calculate shipping charge
  const shippingCharge = totalAmount < 499 ? 120 : 0;
  const finalAmount = totalAmount + shippingCharge;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call your backend API to create the order
      const { data } = await axiosInstance.post("/create-order", {
        amount: finalAmount.toFixed(2) * 100,
      }); // Amount in paise

      // Open Razorpay checkout
      const options = {
        key: "rzp_live_xjHKKj55LDpxuX",
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
                setIsLoading(true);
                var stockDeductions = {
                  babySpinachQuantityDetections: 0,
                  pakChoiQuantityDetections: 0,
                  basilQuantityDetections: 0,
                  kaleQuantityDetections: 0,
                  lettuceQuantityDetections: 0,
                };
                cartItems.map((item) => {
                  if (item.product.id === "m1") {
                    stockDeductions.babySpinachQuantityDetections +=
                      item.quantity;
                  } else if (item.product.id === "m7") {
                    stockDeductions.pakChoiQuantityDetections += item.quantity;
                  } else if (item.product.id === "m8") {
                    stockDeductions.kaleQuantityDetections += item.quantity;
                  } else if (item.product.id === "m5") {
                    stockDeductions.lettuceQuantityDetections += item.quantity;
                  } else {
                    stockDeductions.basilQuantityDetections += item.quantity;
                  }
                });
                console.log(stockDeductions);
                axiosInstance
                  .post("/updateStocks", stockDeductions)
                  .then((res) => {
                    console.log(res);
                    navigate("/");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
                var subscriptionDetails = [];
                cartItems.forEach((item) => {
                  const obj = {
                    product_name: item.product.name,
                    quantity: item.quantity,
                  };
                  subscriptionDetails.push(obj);
                });
                const subscription = {
                  mail: localStorage.getItem("name"),
                  paymentId: response.razorpay_payment_id,
                  address: addressDetails[selectedAddressIndex],
                  subscriptionDetails: subscriptionDetails,
                  subscriptionType: subscriptionType,
                  boxSize: boxSize,
                };
                axiosInstance
                  .post("/addSubscription", subscription)
                  .then((res) => {
                    toast.success("Subscription added successfully");
                    setIsLoading(false);
                  })
                  .catch((err) => {
                    console.log(err);
                    setIsLoading(false);
                  });
              }
            })
            .catch((err) => {
              console.log(err);
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
    }
  };

  return (
    <>
      {isLoading ? (
        <LeavesLoader />
      ) : (
        <div className="min-h-screen mt-28 bg-gradient-to-r from-blue-50 to-blue-200 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
              Checkout Your Subscription Box
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cart Details */}
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Your Box
                </h3>
                <div className="space-y-3">
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="grid justify-items-stretch grid-flow-col bg-white p-3 rounded-lg shadow-sm"
                      >
                        <img
                          className="h-16 w-16 rounded-xl "
                          src={item.product.image}
                          alt="product image"
                        />
                        <div className=" justify-self-start content-center">
                          <div className="flex flex-col ">
                            <h4 className="font-medium text-gray-800">
                              {item.product.name}
                            </h4>
                            {/* <span className="text-sm text-gray-500">Weight: {item.quantity}</span> */}
                            <span className="text-sm text-gray-500">
                              Package: weekly{" "}
                            </span>
                          </div>
                        </div>
                        <span className="text-md font-semibold text-gray-700 justify-self-end  content-center">
                          {item.quantity} grams
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
                      Box Value
                    </h1>
                    <hr className="my-4" />
                    <div className="flex justify-between text-lg font-semibold text-gray-700">
                      <span>Subtotal</span>
                      <span>₹ {totalAmount.toFixed(2)}</span>
                    </div>
                    <div
                      className={`flex justify-between text-lg font-semibold ${
                        totalAmount >= 499 ? "text-green-600" : "text-gray-700"
                      }`}
                    >
                      <span>Shipping Charge</span>
                      <span>₹ {shippingCharge.toFixed(2)}</span>
                    </div>
                    {totalAmount < 499 && (
                      <div className="text-sm text-gray-600 mt-2">
                        <p>
                          Note: Shipping charge of ₹120 applies for orders below
                          ₹499.
                        </p>
                      </div>
                    )}
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
                          sessionStorage.setItem("fromSubLogin", true)
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
                          sessionStorage.setItem("fromSubCheckout", true);
                          sessionStorage.setItem("tab", "addresses");
                          sessionStorage.setItem("addForm", true);
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
                            <AddressRadioCardForSub
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

export default SubscriptionCheckOut;
