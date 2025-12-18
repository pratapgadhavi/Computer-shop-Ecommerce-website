import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PageNotFound from "../Components/UI/PageNotFound/PageNotFound";
import Checkout from "../Components/Checkout/Checkout";
import OrderSuccess from "../non-optimized-components/OrderSuccess/OrderSuccess";

// 🔹 Lazy loaded pages
const Home = lazy(() => import("../Components/Home/Home"));
const AboutUs = lazy(() => import("../Components/AboutUs-Page/AboutUs"));
const ContactUs = lazy(() => import("../Components/ContactUs-Page/ContactUs"));
const MyOrder = lazy(() => import("../Components/MyOrder-Page/MyOrder"));
const Monitor = lazy(() => import("../Components/Monitor/Monitor"));
const Mouse = lazy(() => import("../Components/Mouse/Mouse"));
const Cpu = lazy(() => import("../Components/CPU/Cpu"));
const SSD = lazy(() => import("../Components/SSD/SSD"));
const Keyboard = lazy(() => import("../Components/Keyboard/Keyboard"));
const RAM = lazy(() => import("../Components/RAM/RAM"));
const Login = lazy(() => import("../Components/Login/Login"));
const Registration = lazy(() =>
  import("../Components/Registration/Registration")
);
const Cart = lazy(() => import("../Components/Cart/Cart"));
const Model = lazy(() => import("../Components/UI/Category-main/Model"));

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen font-semibold">
          <img src="/loader.gif" className="md:w-48 w-40 h-auto" alt="" />
          {/* <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" /> */}
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="orders" element={<MyOrder />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-success" element={<OrderSuccess />} />
          <Route path="model" element={<Model />} />

          {/* Category Routes */}
          <Route path="monitor" element={<Monitor />} />
          <Route path="mouse" element={<Mouse />} />
          <Route path="cpu" element={<Cpu />} />
          <Route path="ssd" element={<SSD />} />
          <Route path="keyboard" element={<Keyboard />} />
          <Route path="ram" element={<RAM />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
