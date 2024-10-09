import React, { useState } from "react";
import NavBar from "../HomePage/NavBar/NavBar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const SubscriptionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [subscriptionBox, setSubscriptionBox] = useState([]); // Products in the subscription box
  const [quantityModalOpen, setQuantityModalOpen] = useState(false);
  const [subtype, setSubtype] = useState(false);
  
  const [currBoxSize,setCurrBoxSize] = useState(0);

  const [subscriptionType, setSubscriptionType] = useState('');
  const subscriptiontypes = ['Weekly', 'Bi-Weekly', 'Fort-Nightly','Monthly'];

  const [boxSize,setBoxSize] = useState('')
  const boxSizes = [100,250,500];

  const handleSelectBoxSize = (value) =>{
    setBoxSize(value)
    setCurrBoxSize(value)
  }

  const handleSelect = (value) => {
    setSubscriptionType(value);
  };

  const handleCheckout = () => {
    sessionStorage.setItem("boxsize",boxSize);
    sessionStorage.setItem("subbox", JSON.stringify(subscriptionBox));
  };

  const products = [
    {
      id: "m1",
      name: "Baby Spinach",
      description:
        "Baby Spinach is high in vitamin K which serves several function in your body but it is best known for its role in blood clotting.",
      image:
        "https://t3.ftcdn.net/jpg/08/07/98/62/240_F_807986222_KjBaQUDhq5lvjb4FI3mU4Y7ViaHcTTeN.jpg",
    },
    {
      id: "m5",
      name: "Lettuce",
      description:
        "Lettuce is an excellent source of beta carotene (Vitamin A) which is needed for healthy skin, bones and eyes.",
      image:
        "https://t4.ftcdn.net/jpg/02/80/03/99/240_F_280039907_Ny5g14FK1JQU59POwyU5eJj8ZaQNjmQw.jpg",
    },
    {
      id: "m7",
      name: "Pak Choi",
      description:
        "It's full of cancer fighting compounds such as vitamin C and vitamin E, beta-carotene, folate and selenium.",
      image:
        "https://t3.ftcdn.net/jpg/03/92/37/26/240_F_392372698_06CR5RnRAQLHY7uzkqS9G6bfDeDPuuzk.jpg",
    },
    {
      id: "m8",
      name: "Kale",
      description:
        "It is a nutrition superstar due to the amounts of vitamin A, B6, C, K, folate, fiber, carotenoids, and manganese it contains.",
      image:
        "https://t3.ftcdn.net/jpg/02/30/97/16/240_F_230971608_hsf90qBGPcmUuv3m0LkWPAuI5i5PnQmL.jpg",
    },
    {
      id: "m9",
      name: "Basil",
      description:
        "It provides some macronutrients such as calcium and vitamin K, as well as a range of antioxidants.",
      image:
        "https://t3.ftcdn.net/jpg/01/48/71/76/240_F_148717694_VUiPGqDdJ6gOuHKDr6hAvAmI5qdpKZef.jpg",
    },
  ];

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

  const handleDragStart = (event, product) => {
    event.dataTransfer.setData("productId", product.id);
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
    if(currBoxSize-quantity<0){
      toast.warn("Oops!! Your box has no empty space")
      return;
    }
    setCurrBoxSize(currBoxSize-quantity)
    setSubscriptionBox([
      ...subscriptionBox,
      { product: selectedProduct, quantity },
    ]);
    closeQuantityModal();
  };

  const handleRemoveFromSubscriptionBox = (productId,quantity) => {
    const value = subscriptionBox.find((item)=> item.product.id===productId && item.quantity===quantity)
    setCurrBoxSize(currBoxSize+value.quantity)
    setSubscriptionBox(subscriptionBox.filter((item) => !(item.product.id===productId && item.quantity===quantity) ));
  };

  return (
    <>
      <NavBar />
      <div className=" bg-white text-black p-6 mt-36">
        {/* Hero Section */}
        <section className="bg-green-500 text-white p-10 mb-10 rounded-lg text-center">
          <h1 className="text-5xl font-bold mb-4">
            Fresh Herbs Delivered to Your Doorstep
          </h1>
          <p className="text-lg mb-4">
            Explore the finest herbs, grown naturally and delivered fresh. Start
            your subscription today and enjoy the goodness of fresh herbs in
            your kitchen!
          </p>
          <button
            onClick={() => setSubtype(true)}
            className="bg-yellow-500 justify-center items-center py-2 px-6 text-lg rounded hover:bg-yellow-600 transition"
          >
            Subscribe Now
          </button>
        </section>

        {/* Products Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {products.map((product, index) => (
            <div key={index} className="bg-green-100 p-6 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="mb-4">{product.description}</p>
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
                onClick={
                  () => setSubtype(true)
                  // () => openModal(product)
                }
              >
                Subscribe Now
              </button>
            </div>
          ))}
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed z-30 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-4xl w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Subscription Details</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
              <div className="flex">
                {/* Left Side: Subscription Box */}
                <div
                  className="w-1/2 p-4 bg-gray-100 rounded-md mr-4 relative"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  style={{ minHeight: "300px" }}
                >
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-4">Subscription Box</h3>
                    <h2 className="text-md mb-4">Current Space in box -  <b>{currBoxSize} grams </b></h2>
                    {subscriptionBox.length === 0 ? (
                      <p>
                        Please drag and put the items you want to subscribe in
                        this box in assorted way
                      </p>
                    ) : (
                      <div className="grid grid-cols-3 gap-2">
                        {subscriptionBox.map((item, index) => (
                          <div key={index} className="border p-2 rounded">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-full h-16 object-cover rounded-md"
                            />
                            <p className="text-xs mt-2 text-center">
                              {item.product.name} ({item.quantity}g)
                            </p>
                            <button
                              className="text-red-500 mt-2 text-center"
                              onClick={() =>
                                handleRemoveFromSubscriptionBox(item.product.id,item.quantity)
                              }
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Checkout Button */}
                    {subscriptionBox.length > 0 && (
                      <div className="mt-4">
                        <Link to={`/subscription-checkout`}>
                          <button
                            onClick={handleCheckout}
                            className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition"
                          >
                            Checkout
                          </button>
                        </Link>
                      </div>
                    )}
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

                <div className="w-1/2 p-4 bg-white grid grid-cols-2 gap-4">
                  {products
                    
                    .map((product, index) => (
                      <div
                        key={index}
                        className="cursor-pointer p-4 border rounded-md"
                        draggable
                        onDragStart={(event) => handleDragStart(event, product)}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-20 object-cover rounded-md"
                        />
                        <p className="text-center mt-2 text-sm">
                          {product.name}
                        </p>
                      </div>
                    ))}
                </div>
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
                  className="bg-green-400 hover:bg-green-700 text-white py-2 px-4 rounded"
                  onClick={() => handleAddToSubscriptionBox(30)}
                >
                  30g
                </button>
                <button
                  className="bg-green-400 hover:bg-green-700 text-white py-2 px-4 rounded"
                  onClick={() => handleAddToSubscriptionBox(40)}
                >
                  40g
                </button>
                <button
                  className="bg-green-400 hover:bg-green-700 text-white py-2 px-4 rounded"
                  onClick={() => handleAddToSubscriptionBox(50)}
                >
                  50g
                </button>
                <button
                  className="bg-green-400 hover:bg-green-700 text-white py-2 px-4 rounded"
                  onClick={() => handleAddToSubscriptionBox(60)}
                >
                  60g
                </button>
                </div>
                <div className="flex flex-col space-y-4">
                <button
                  className="bg-green-400 hover:bg-green-700 text-white py-2 px-4 rounded"
                  onClick={() => handleAddToSubscriptionBox(70)}
                >
                  70g
                </button>
                <button
                  className="bg-green-400 hover:bg-green-700 text-white py-2 px-4 rounded"
                  onClick={() => handleAddToSubscriptionBox(80)}
                >
                  80g
                </button>
                <button
                  className="bg-green-400 hover:bg-green-700 text-white py-2 px-4 rounded"
                  onClick={() => handleAddToSubscriptionBox(90)}
                >
                  90g
                </button>
                <button
                  className="bg-green-400 hover:bg-green-700 text-white py-2 px-4 rounded"
                  onClick={() => handleAddToSubscriptionBox(100)}
                >
                  100g
                </button>
                </div>
              </div>
              <button
                className="mt-4 justify-center items-center bg-gray-500 text-white py-2 px-4 rounded"
                onClick={closeQuantityModal}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {subtype && (
          <div className="fixed z-40 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white flex flex-col p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Select the subscription type
              </h3>
              <div className="flex justify-around space-x-8">
              {subscriptiontypes.map((substype) => (
        <div
          key={subtype}
          onClick={() => handleSelect(substype)}
          className={`cursor-pointer p-3 border border-black rounded-lg transition-all duration-400 ${
            subscriptionType === substype ? 'bg-green-400 text-white' : 'bg-white text-black'
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
          className={`cursor-pointer p-4 border border-black rounded-lg transition-all duration-200 ${
            boxSize === size ? 'bg-green-400 text-white' : 'bg-white text-black'
          }`}
        >
          {size} grams
        </div>
      ))}
                </div>
              </div>
              {boxSize && subscriptionType && 
              <button
                className="mt-4 justify-center items-center bg-green-400 text-white py-2 px-4 rounded"
                onClick={()=>{
                  setSubtype(false)
                  setIsModalOpen(true)
                }}
              >
                Proceed
              </button>
              }
              <button
                className="mt-4 justify-center items-center bg-gray-500 text-white py-2 px-4 rounded"
                onClick={()=>setSubtype(false)}
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
