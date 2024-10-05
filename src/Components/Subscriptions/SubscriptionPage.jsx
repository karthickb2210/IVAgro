import React, { useState } from 'react';

import NavBar from '../HomePage/NavBar/NavBar';

const SubscriptionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const products = [
    {
      "id": "m1",
      "name": "Baby Spinach",
      "price": [
         "8.99",
      "16.99",
       "24.99",
       "36.99",
       "54.99",
       "80.99"
    ],
      "description": "Baby Spinach is high in vitamin K which serves several function in your body but it is best know for its role in blood clotting.",
      "image": "https://t3.ftcdn.net/jpg/08/07/98/62/240_F_807986222_KjBaQUDhq5lvjb4FI3mU4Y7ViaHcTTeN.jpg"
  },
  {
      "id": "m2",
      "name": "Parsley",
      "price": [
         "8.99",
      "16.99",
       "24.99",
       "36.99",
       "54.99",
       "80.99"
    ],
      "description": "Parlsey contains several important nutrients such as vitamins A,K and C. It's also a good source of minerals, calcium, iron, magnesium and pottasium",
      "image": "https://t3.ftcdn.net/jpg/00/84/25/74/240_F_84257423_tVophZEYP0Rvdf07raBdVogXDs188EAs.jpg"
  },
  {
      "id": "m3",
      "name": "Rosemary",
      "price": [
         "8.99",
      "16.99",
       "24.99",
       "36.99",
       "54.99",
       "80.99"
    ],
      "description": "Rosemary has rande of possible health benefits.The Herb not only tastes good in culinary dishes, such as rosemary chicken and lamb, but it also contains iron, calcium and vitamin B6. ",
      "image": "https://t4.ftcdn.net/jpg/03/95/47/51/240_F_395475146_TL4pmQ03jzoDJAxibqj3KbET7Hx4Ojqi.jpg"
  },
  {
      "id": "m4",
      "name": "Thyme",
      "price": [
         "8.99",
      "16.99",
       "24.99",
       "36.99",
       "54.99",
       "80.99"
    ],
      "description": "Thyme is an herb from the mint family and is a culinary staple. That said, it may also provide numerous health benefits, such as fighting acne, regulating mucus, fighting infections. ",
      "image": "https://t3.ftcdn.net/jpg/08/37/49/98/240_F_837499825_5mzhBgOElQUKUlqO98hUYmvo7sjjoy2F.jpg"
  },
  {
      "id": "m5",
      "name": "Lettuce",
      "price": [
         "8.99",
      "16.99",
       "24.99",
       "36.99",
       "54.99",
       "80.99"
    ],
      "description": "Lettuce is an excellent source of beta carotene (Vitamin A) which is needed for healthy skin, bones and eyes.",
      "image": "https://t4.ftcdn.net/jpg/02/80/03/99/240_F_280039907_Ny5g14FK1JQU59POwyU5eJj8ZaQNjmQw.jpg"
  },
  {
      "id": "m6",
      "name": "Arugula",
      "price": [
         "8.99",
      "16.99",
       "24.99",
       "36.99",
       "54.99",
       "80.99"
    ],
      "description": "It is high in beta-carotene vitamin C, folate, vitamin K and magnesium. Two cups of raw arugula will provide 20% of the body's daily vitamin A.",
      "image": "https://t3.ftcdn.net/jpg/08/50/95/42/240_F_850954265_neGQj7N1GC75XnFSnSLu0dYLI3xneQW5.jpg"
  },
  {
      "id": "m7",
      "name": "Pak Choi",
      "price": [
         "8.99",
      "16.99",
       "24.99",
       "36.99",
       "54.99",
       "80.99"
    ],
      "description": "It's full of cancer fighting compounds such as vitamin C and vitamin E, beta-carotene ,folate and selenium.",
      "image": "https://t3.ftcdn.net/jpg/03/92/37/26/240_F_392372698_06CR5RnRAQLHY7uzkqS9G6bfDeDPuuzk.jpg"
  },
  {
      "id": "m8",
      "name": "Kale",
      "price": [
         "8.99",
      "16.99",
       "24.99",
       "36.99",
       "54.99",
       "80.99"
    ],
      "description": "It is a nutrition superstar due to the amounts of vitamin A, B6, C, K, folate, fiber, carotenoids and manganese it contains.",
      "image": "https://t3.ftcdn.net/jpg/02/30/97/16/240_F_230971608_hsf90qBGPcmUuv3m0LkWPAuI5i5PnQmL.jpg"
  },
  {
      "id": "m9",
      "name": "Basil",
      "price": [
         "8.99",
      "16.99",
       "24.99",
       "36.99",
       "54.99",
       "80.99"
    ],
      "description": "It provides some macro nutrients such as calcium and vitamin K, as well as a range of antioxidants.",
      "image": "https://t3.ftcdn.net/jpg/01/48/71/76/240_F_148717694_VUiPGqDdJ6gOuHKDr6hAvAmI5qdpKZef.jpg"
  }
  ];

  const subscriptionTypes = ['Daily', 'Thrice a Week', 'Twice a Week'];


  const handleSubscribeClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

 

  return (
    <>
    <NavBar />
    <div className="min-h-screen bg-white text-black p-6 mt-36">
      {/* Hero Section */}
      <section className="bg-green-500 text-white p-10 mb-10 rounded-lg text-center">
        <h1 className="text-5xl font-bold mb-4">Fresh Herbs Delivered to Your Doorstep</h1>
        <p className="text-lg mb-4">
          Explore the finest herbs, grown naturally and delivered fresh. Start your subscription today and enjoy the goodness of fresh herbs in your kitchen!
        </p>
        <button className="bg-yellow-500 py-2 px-6 text-lg rounded hover:bg-yellow-600 transition">
          Subscribe Now
        </button>
      </section>

      {/* Subscription Explanation Section */}
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Fresh Herbs Subscription Plans</h1>
        <p className="text-lg mb-2">
          Welcome to our herbs shop! Choose your preferred subscription model and enjoy fresh herbs delivered regularly.
        </p>
        <p className="text-lg mb-4">
          Whether you want herbs daily, thrice a week, or twice a week, we have the right plan for you!
        </p>
      </section>

      {/* Products Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {products.map((product, index) => (
          <div key={index} className="bg-green-100 p-6 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-4">{product.description}</p>
            {/* <p className="font-bold mb-4">₹ {product.price[0]}</p> */}
            <button
              onClick={() => handleSubscribeClick(product)}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
            >
              Subscribe Now
            </button>
          </div>
        ))}
      </section>

      {/* Modal for Subscription Details */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Subscribe to {selectedProduct?.name}</h2>
              <button onClick={closeModal} className="text-gray-600 hover:text-black">&times;</button>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">Subscription Type</label>
                <select className="w-full border border-gray-300 rounded p-2">
                  {subscriptionTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition w-full"
              >
                Confirm Subscription
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FAQ Section with Redesigned Dropdown */}
      <section className="bg-white">
	<div className="container flex flex-col justify-center p-4 md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-24 dark:divide-gray-300">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What herbs are available for subscription?</summary>
				<div className="px-4 pb-4">
					<p>We offer a variety of herbs like basil, mint, rosemary, thyme, oregano, and more.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">How does the subscription work?</summary>
				<div className="px-4 pb-4">
					<p>You choose a subscription type (daily, thrice a week, or twice a week), and we deliver fresh herbs based on your selected plan.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Can I change my subscription type later?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Yes, you can change or cancel your subscription at any time.</p>
				</div>
			</details>
            <details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What payment methods are accepted?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>We accept all major credit cards and digital wallets.</p>
				</div>
			</details>
            <details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">How do I cancel my subscription?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>You can cancel your subscription by contacting our customer support or through your account dashboard.</p>
				</div>
			</details>
		</div>
	</div>
</section>
    </div>
    </>);
};

export default SubscriptionPage;
