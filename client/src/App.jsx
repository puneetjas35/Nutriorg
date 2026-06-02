import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
// import Seabuckthorn from "./Product/Seabuckthorn";
import ImmunityBooster from "./Product/ImmunityBooster";
import Login from "./Login";
// import Cart from "./Cart"
import Register from "./Register";
import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from "./ForgotPassword";
import OtpVerification from "./OtpVerification";
import ResetPassword from "./ResetPassword";
import { useEffect } from 'react';
import fetchUserDetails from './utils/fetchUserDetails';
import { setUserDetails } from "./store/userSlice";
import { useDispatch } from "react-redux";
import Dashboard from "./Layout/Dashboard";
import Profile from "./Profile";
import MyOrders from "./MyOrders";
import Address from "./Address";
import { useLocation } from "react-router-dom";
import Axios from "./utils/Axios";
import SummaryApi from "./common/SummaryApi";
import { handleAddItemCart } from "./store/cartProduct"
import GlobalProvider from "./provider/GlobalProvider";
import { FaCartShopping, FaQ } from "react-icons/fa6";
import CartMobileLink from "./CartMobile";
import CartMobile from "./pages/CartMobile";
import CheckoutPage from "./pages/CheckoutPage";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import DetoxJuicePage from "./Product/DetoxJuice";
import ProductDetails from "./ProductDetails"
import ConsultationForm from "./ConsultationForm";
import OurStory from "./OurStory";
import ScrollToTop from "./ScrollToTop"
import About from "./pages/About";
import Founder from "./pages/Founder";
import Ourvalues from "./pages/Ourvalues";
import Sustainable from "./pages/Sustainable";
import Ourcontributions from "./pages/Ourcontributions";
import Ourcertifications from "./pages/Ourcertifications";
import NewsMedia from "./pages/NewsMedia";
import HomeBlog from "./pages/HomeBlog";
import OrdersTracking from "./pages/OrdersTracking";
import FAQ from "./pages/Faq";
import Shipping from "./pages/Shipping"
import Terms from "./pages/Terms";
import Privacypolicy from "./pages/Privacypolicy";
import Return from "./pages/Return";

function App() {

  const searchRef = useRef(null);

  const scrollToSearch = () => {
    searchRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    searchRef.current?.focus();
  };
 
  const dispatch = useDispatch()
  const location = useLocation()


  const fetchUser = async () => {
    const userData = await fetchUserDetails()
    dispatch(setUserDetails(userData.data.data))
  }



  useEffect(() => {
    const token = localStorage.getItem("accesstoken")

    if (token) {
      fetchUser()
      // fetchCartItem()
    }
  }, [])


  return (
    <GlobalProvider>
       <ScrollToTop />
      <Navbar searchRef={searchRef} />
      <Routes>
         
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/ourvalues" element={<Ourvalues />} />
        <Route path="/sustainable" element={<Sustainable />} />
        <Route path="/ourcontributions" element={<Ourcontributions />} />
        <Route path="/ourcertifications" element={<Ourcertifications />} />
        <Route path="/newsmedia" element={<NewsMedia />} />
        <Route path="/homeblog" element={<HomeBlog />} />
        <Route path="/orderstracking" element={<OrdersTracking/>} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacypolicy" element={<Privacypolicy/>} />
        <Route path="/return" element={<Return />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification-otp" element={<OtpVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="myorders" element={<MyOrders />} />
          <Route path="address" element={<Address />} />
        </Route>
        <Route path="/cart" element={<CartMobile />} />
        {/* <Route path="/product/:slug" element={<Seabuckthorn />} /> */}
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/category/:category" element={<DetoxJuicePage />} />
         <Route path="/consultation" element={<ConsultationForm/>} />
         <Route path="/ourstory" element={<OurStory/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />

      </Routes>

      <Footer  scrollToSearch={scrollToSearch}/>
      <Toaster />
      {
        location.pathname !== "/checkout" && (
          <CartMobileLink />

        )
      }


</GlobalProvider>
  );
}

export default App;
