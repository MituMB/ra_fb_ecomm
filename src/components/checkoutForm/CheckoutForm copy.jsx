
// import React, { useEffect, useState } from "react";
// import styles from "./CheckoutForm.module.scss";

// import {
//   PaymentElement,
//   useStripe,
//   useElements
// } from "@stripe/react-stripe-js";
// import Card from "../card/Card";
// import CheckoutSummary from "../checkoutSummary/CheckoutSummary";
// import spinnerImg from "../../assets/spinner.jpg";
// import { toast } from "react-toastify";

//   const CheckoutForm = () =>{
//   const stripe = useStripe();
//   const elements = useElements();

//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (!stripe) {
//       return;
//     }

//     const clientSecret = new URLSearchParams(window.location.search).get(
//       "payment_intent_client_secret"
//     );

//     if (!clientSecret) {
//       return;
//     }

//   }, [stripe]);


//   const saveOrder = () =>{
//     console.log('order saved');
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(null)

//     if (!stripe || !elements) {
//       // Stripe.js has not yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }

//     setIsLoading(true);

//     const confirmPayment = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         // Make sure to change this to your payment completion page
//         return_url: "http://localhost:3000/checkout-success",
//       },
//       redirect:"if_required"
//     })
//     .then((result) => {
//       // ok - paymentIntent // bad - error
//       if (result.error) {
//         toast.error(result.error.message);
//         setMessage(result.error.message);
//         return;
//       }
//       if (result.paymentIntent) {
//         if (result.paymentIntent.status === "succeeded") {
//           setIsLoading(false);
//           toast.success("Payment successful");
//           saveOrder();
//         }
//       }
//     });

//     setIsLoading(false);
//   };


//   return (
//     <section>
//       <div className={`container ${styles.checkout}`}>
//         <h2>Checkout</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <Card cardClass={styles.card}>
//               <CheckoutSummary />
//             </Card>
//           </div>
//           <div>
//             <Card cardClass={`${styles.card} ${styles.pay}`}>
//                 <h3>Stripe Checkout</h3>
//                <PaymentElement  id={styles["payment-element"]}  />
//                   <button disabled={isLoading || !stripe || !elements} id="submit">
//                     <span id="button-text">
//                       {isLoading ? ( <img
//                       src={spinnerImg}
//                       alt="Loading..."
//                       style={{ width: "20px" }}
//                     />):( "Pay now")}
//                   </span>
//                 </button>
//                   {/* Show any error or success messages */}
//                 {message && <div id="payment-message">{message}</div>}
//             </Card>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default CheckoutForm() 