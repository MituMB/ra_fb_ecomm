import React, { useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Calculate_Subtotal, Calculate_Total_quantity, selectCartItems, selectCartTotalAmount, selectCartTotalQuantity } from '../../redux/slice/cartSlice';
import { selectEmail } from '../../redux/slice/authSlice';
import { selectBillingAddress, selectShippingAddress } from '../../redux/slice/checkoutSlice';
import { toast } from 'react-toastify';
import CheckoutForm from '../../components/checkoutForm/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_STRIPE_PK);

const Checkout = () => {
  const [message, setmessage] = useState("Initializing Checkout");
  const [clientSecret, setClientSecret] = useState("");

  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  // const cartTotalQuantity = useSelector(selectCartTotalQuantity);
  const customerEmail = useSelector(selectEmail);
  const shippingAddresses = useSelector(selectShippingAddress);
  const billingAddresses = useSelector(selectBillingAddress);

  const dispatch = useDispatch();
  const navigate = useNavigate();

useEffect(() => {
 dispatch(Calculate_Subtotal())
 dispatch(Calculate_Total_quantity());
}, [cartItems, dispatch])


const description = `eShop payment: email: ${customerEmail}, Amount: ${cartTotalAmount}`;
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         items: cartItems,
         userEmail: customerEmail,
         shipping: shippingAddresses,
         billing: billingAddresses,
         description
        }),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then((json) => Promise.reject(json));
    })
      .then((data) => {setClientSecret(data.clientSecret)
      })
   .catch((error) => {
    setmessage("Failed to initialize checkout");
        toast.error("Something went wrong!!!");
      });
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
  <>
  <section>
        <div className="container">{!clientSecret && <h3>{message}</h3>}</div>
      </section>
  {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
  </>
  )
}

export default Checkout;