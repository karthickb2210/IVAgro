import React, { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../config/AxiosConfig';

const PaymentPage = () => {
  const [amount, setAmount] = useState(0);

  const handlePayment = async () => {
    try {
      // Call your backend API to create the order
      const { data } = await axiosInstance.post('/create-order', { amount: amount * 100 }); // Amount in paise

      // Open Razorpay checkout
      const options = {
        key: 'rzp_test_wbXDO68U56KR2k',
        amount: data.amount,
        currency: 'INR',
        name: 'Your Company Name',
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
    <div className="App">
      <h2>Make a Payment</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
