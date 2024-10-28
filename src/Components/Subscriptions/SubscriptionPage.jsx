import React, { useState, useRef, useEffect } from "react";
import NavBar from "../HomePage/NavBar/NavBar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import products from "./Products";
import { MdDeleteForever } from "react-icons/md";

const SubscriptionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [subscriptionBox, setSubscriptionBox] = useState([]); // Products in the subscription box
  const [quantityModalOpen, setQuantityModalOpen] = useState(false);
  const [subtype, setSubtype] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [currBoxSize, setCurrBoxSize] = useState(0);

  const [subscriptionType, setSubscriptionType] = useState("");
  const subscriptiontypes = ["Weekly", "Bi-Weekly", "Fort-Nightly", "Monthly"];

  const [boxSize, setBoxSize] = useState("");
  const boxSizes = [100, 250, 500];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelectBoxSize = (value) => {
    setBoxSize(value);
    setCurrBoxSize(value);
  };

  const handleSelect = (value) => {
    setSubscriptionType(value);
  };

  const handleCheckout = () => {
    sessionStorage.setItem("boxsize", boxSize);
    sessionStorage.setItem("subscriptionType", subscriptionType);
    sessionStorage.setItem("subbox", JSON.stringify(subscriptionBox));
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openQuantityModal = () => {
    setQuantityModalOpen(true);
  };

  const closeQuantityModal = () => {
    setQuantityModalOpen(false);
  };
  console.log(isMobile);

  const handleDragStart = (event, product) => {
    event.dataTransfer.setData("productId", product.id);
  };

  const handleProductClick = (product) => {
    if (isMobile) {
      const productId = product.id;
      const productToAdd = products.find((product) => product.id === productId);
      if (
        productToAdd
        // &&
        // !subscriptionBox.some((item) => item.product.id === productId)
      ) {
        setSelectedProduct(productToAdd);
        openQuantityModal(); // Ask for quantity
      }
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const productId = event.dataTransfer.getData("productId");
    const productToAdd = products.find((product) => product.id === productId);
    if (
      productToAdd
      // &&
      // !subscriptionBox.some((item) => item.product.id === productId)
    ) {
      setSelectedProduct(productToAdd);
      openQuantityModal(); // Ask for quantity
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleAddToSubscriptionBox = (quantity) => {
    if (currBoxSize - quantity < 0) {
      toast.warn("Oops!! Your box has no empty space");
      return;
    }
    setCurrBoxSize(currBoxSize - quantity);
    setSubscriptionBox([
      ...subscriptionBox,
      { product: selectedProduct, quantity },
    ]);
    closeQuantityModal();
  };

  const handleRemoveFromSubscriptionBox = (productId, quantity) => {
    const value = subscriptionBox.find(
      (item) => item.product.id === productId && item.quantity === quantity
    );
    setCurrBoxSize(currBoxSize + value.quantity);
    setSubscriptionBox(
      subscriptionBox.filter(
        (item) => !(item.product.id === productId && item.quantity === quantity)
      )
    );
  };

  return (
    <>
      <div className=" bg-white text-black p-6 mt-36">
        {/* Hero Section */}
        <section className="bg-teal-950 text-white p-10 mb-10 rounded-lg text-center">
          <h1 className="text-5xl font-bold mb-4">
            Fresh Leafy Greens Delivered to Your Doorstep
          </h1>
          <p className="text-lg mb-4">
            Explore the finest Leafy greens, grown naturally and delivered fresh. Start
            your subscription today and enjoy the goodness of fresh greens in
            your kitchen!
          </p>
          <button
            onClick={() => setSubtype(true)}
            className="bg-amber-500 justify-center items-center py-2 px-6 text-lg rounded hover:bg-amber-700 transition"
          >
            Subscribe Now
          </button>
        </section>

        {/* Products Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {products.map((product, index) => (
            <div key={index} className="bg-amber-100 p-6 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48  object-cover rounded-md mb-4"
              />
              <h2 className="flex  items-center justify-center text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="mb-4 text-center">{product.description}</p>
              <div className=" flex items-center justify-center">
              <button
                className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-700 transition"
                onClick={
                  () => setSubtype(true)
                  // () => openModal(product)
                }
              >
              
                Subscribe Now
              </button>
              </div>
            </div>
          ))}
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed z-30 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white max-h-screen overflow-y-auto p-6 rounded-lg max-w-4xl w-full">
              <div className="flex max-h-screen overflow-y-auto justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Subscription Details</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
              <div className={`flex `}>
                {/* Left Side: Subscription Box */}
                <div
                  className="w-1/2 p-4 bg-gray-100 rounded-md mr-4 relative"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  style={{ minHeight: "300px" }}
                >
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-4">Subscription Box</h3>
                    <h2 className="text-md sm:text-sm mb-4">
                      Current Space in box - <b>{currBoxSize} grams </b>
                    </h2>
                    {subscriptionBox.length === 0 ? (
                      <p>
                        Please drag and put the items you want to subscribe in
                        this box in assorted way
                      </p>
                    ) : (
                      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 grid-cols-2 gap-2">
                        {subscriptionBox.map((item, index) => (
                          <div
                            key={index}
                            className="border p-1 rounded flex flex-col"
                          >
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="object-cover  rounded-md"
                            />
                            <p className="text-xs mt-1 text-center">
                              {item.product.name} ({item.quantity}g)
                            </p>
                            <button
                              className="text-black mt-1 p-1 text-center w-full rounded-lg bg-red-600 flex items-center justify-center"
                              onClick={() =>
                                handleRemoveFromSubscriptionBox(
                                  item.product.id,
                                  item.quantity
                                )
                              }
                            >
                              <MdDeleteForever />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Checkout Button */}
                  </div>
                </div>

                {/* Right Side: Product Icons */}

                {/* filter option for right box */}
                {/* .filter(
                      (product) =>
                        !subscriptionBox.some(
                          (item) => item.product.id === product.id
                        )
                    ) */}

                <div className="w-1/2 p-1 touch-none bg-white grid grid-cols-2 xl:grid-cols-3 gap-4">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="cursor-pointer flex-grow p-1 flex flex-col border rounded-md"
                      draggable
                      onDragStart={(event) => handleDragStart(event, product)}
                      onClick={() => handleProductClick(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full object-cover rounded-xl"
                      />
                      <p className="text-center mt-2 text-sm">{product.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" flex justify-center items-center mt-2">
                {subscriptionBox.length > 0 && (
                  <div className="mt-4">
                    <Link to={`/subscription-checkout`}>
                      <button
                        onClick={handleCheckout}
                        className="bg-teal-950 text-white py-2 px-6 rounded hover:bg-teal-600 transition"
                      >
                        Checkout
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Quantity Modal */}
        {quantityModalOpen && (
          <div className="fixed z-40 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white flex flex-col p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Select Quantity for {selectedProduct.name}
              </h3>
              <div className="flex justify-around">
                <div className="flex flex-col space-y-4">
                  <button
                    className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
                    onClick={() => handleAddToSubscriptionBox(30)}
                  >
                    30g
                  </button>
                  <button
                    className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
                    onClick={() => handleAddToSubscriptionBox(40)}
                  >
                    40g
                  </button>
                  <button
                    className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
                    onClick={() => handleAddToSubscriptionBox(50)}
                  >
                    50g
                  </button>
                  <button
                    className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
                    onClick={() => handleAddToSubscriptionBox(60)}
                  >
                    60g
                  </button>
                </div>
                <div className="flex flex-col space-y-4">
                  <button
                    className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
                    onClick={() => handleAddToSubscriptionBox(70)}
                  >
                    70g
                  </button>
                  <button
                    className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
                    onClick={() => handleAddToSubscriptionBox(80)}
                  >
                    80g
                  </button>
                  <button
                    className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
                    onClick={() => handleAddToSubscriptionBox(90)}
                  >
                    90g
                  </button>
                  <button
                    className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
                    onClick={() => handleAddToSubscriptionBox(100)}
                  >
                    100g
                  </button>
                </div>
              </div>
              <button
                className="mt-4 justify-center items-center bg-red-500 text-white py-2 px-4 rounded"
                onClick={closeQuantityModal}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {subtype && (
          <div className="fixed z-40 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white flex flex-col p-3 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Select the subscription type
              </h3>
              <div className="flex justify-around space-x-8">
                {subscriptiontypes.map((substype) => (
                  <div
                    key={subtype}
                    onClick={() => handleSelect(substype)}
                    className={`cursor-pointer p-2 text-md text-nowrap xl:text-xl border border-black sm:text-xs md:text-md rounded-lg transition-all duration-400 ${
                      subscriptionType === substype
                        ? "bg-teal-950 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {substype}
                  </div>
                ))}
              </div>

              <div className="my-6">
                <h3 className="text-xl font-semibold mb-4">
                  Select the Size of the Box
                </h3>
                <div className="flex justify-around space-x-8">
                  {boxSizes.map((size) => (
                    <div
                      key={size}
                      onClick={() => handleSelectBoxSize(size)}
                      className={`cursor-pointer p-3 sm:text-xs md:text-md text-md xl:text-xl border border-black rounded-lg transition-all duration-200 ${
                        boxSize === size
                          ? "bg-teal-950 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {size} grams
                    </div>
                  ))}
                </div>
              </div>
              {boxSize && subscriptionType && (
                <button
                  className="mt-4 justify-center items-center bg-teal-950 text-white py-2 px-4 rounded"
                  onClick={() => {
                    setSubtype(false);
                    setIsModalOpen(true);
                  }}
                >
                  Proceed
                </button>
              )}
              <button
                className="mt-4 justify-center items-center bg-red-500 text-white py-2 px-4 rounded"
                onClick={() => setSubtype(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SubscriptionPage;
