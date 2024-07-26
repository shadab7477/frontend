import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'; // Make sure you have react-toastify installed

const Checkout = () => {
  const location = useLocation();
  const { cart } = location.state || {};

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({
    line1: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'IN', // Set default country to India
  });

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleApplyCoupon = async () => {
    try {
      const response = await axios.post('http://localhost:9000/apply-coupon', { couponCode });
      toast.success(`Congratulations, you got ${response.data.discount}% discount! 🎉`);
      setDiscount(response.data.discount);
    } catch (error) {
      console.error('Error applying coupon:', error);
      setDiscount(0);
    }
  };

  const handleShippingAddressChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const handlePaymentRedirect = async () => {
    console.log("yeahh")
    try {
      const products = cart.items.map(item => ({
        name: item.product.name,
        image: item.product.image,
        price: parseInt(item.product.price, 10), // Convert price to integer
        quantity: parseInt(item.quantity, 10), // Convert quantity to integer
      }));

      const response = await axios.post('http://localhost:9000/payu-payment', {
        userId: cart.user,
        coupon: couponCode,
        products,
        shippingAddress,
        couponCode,
      });

      const paymentData = response.data;

      // Create a form to submit the payment data to PayU
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://secure.payu.in/_payment'; // PayU payment gateway URL

      Object.keys(paymentData).forEach((key) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = paymentData[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error('Error creating payment link:', error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Shipping Address</h3>
        <input
          type="text"
          name="line1"
          placeholder="Address Line 1"
          value={shippingAddress.line1}
          onChange={handleShippingAddressChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingAddress.city}
          onChange={handleShippingAddressChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={shippingAddress.state}
          onChange={handleShippingAddressChange}
        />
        <input
          type="text"
          name="postal_code"
          placeholder="Postal Code"
          value={shippingAddress.postal_code}
          onChange={handleShippingAddressChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={shippingAddress.country}
          onChange={handleShippingAddressChange}
        />
      </div>
      <div>
        <h3>Coupon Code</h3>
        <input
          type="text"
          value={couponCode}
          onChange={handleCouponChange}
        />
        <button onClick={handleApplyCoupon}>Apply Coupon</button>
      </div>
      <button onClick={handlePaymentRedirect}>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
