import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Pages
import { Admin, Contact, Home, Login, Register, Reset } from "./pages";
//Components
import { Footer, Header } from "./components";
import AdminRoute from "./components/adminRoute/AdminRoute";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import CheckoutDetails from "./pages/checkout/CheckoutDetails";
import Checkout from "./pages/checkout/Checkout";
import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";
import OrderHistory from "./pages/orderHistory/OrderHistory";
import OrderDetails from "./pages/orderDetails/OrderDetails";
import ReviewProduct from "./components/reviewProduct/ReviewProduct";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <>
     <BrowserRouter>
     <ToastContainer />
     <Header/>
     <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/contact" element={<Contact /> } />
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={<Register /> } />
        <Route path="/reset" element={<Reset /> } />
        <Route path="/admin/*" element={
            <AdminRoute>
                      <Admin /> 
            </AdminRoute>
       } />
        <Route path="/productDetails/:id" element={<ProductDetails /> } />
        <Route path="/cart" element={<Cart /> } />
        <Route path="/checkout-details" element={<CheckoutDetails /> } />
        <Route path="/checkout" element={<Checkout /> } />
        <Route path="/checkout-success" element={<CheckoutSuccess /> } />
        <Route path="/order-history" element={<OrderHistory /> } />
        <Route path="/order-details/:id" element={<OrderDetails /> } />
        <Route path="/review-product/:id" element={<ReviewProduct /> } />
        <Route path="*" element={<NotFound /> } />
      </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
