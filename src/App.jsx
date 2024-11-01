import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AdminPage from "./ADMIN/AdminPage";
import LoginPage from "./ADMIN/LoginPage";
import ForgotPassword from "./ADMIN/ForgetPassword.jsx";
import MainPage from "./USER/HomePage/MainPage.jsx";
import ContactParent from "./USER/ContactPage/ContactParent.jsx";
import AboutUsParent from "./USER/AboutUsPage/AboutUsParent.jsx";
import ParentProduct from "./USER/ProductPage/ParentProduct.jsx";
import ParentProductDetail from "./USER/ProductDetails/ParentProductDetail.jsx";
import Header from "./USER/Header.jsx";
import FeaturedWork from "./USER/HomePage/FeaturedWork.jsx";

const AppRoutes = ({ user, setUser }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/api/admin");

  return (
    <>
      {!isAdminRoute && <Header />} {/* Conditionally render Header */}
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ParentProduct />} />
        <Route path="/products/:id" element={<ParentProductDetail />} />
        <Route path="/contact" element={<ContactParent />} />
        <Route path="/aboutus" element={<AboutUsParent />} />
        <Route path="/hello" element={<FeaturedWork />} />

        <Route
          path="/api/adminLogin"
          element={
            user ? (
              <Navigate to="/api/adminDashboard" />
            ) : (
              <LoginPage setUser={setUser} />
            )
          }
        />
        <Route
          path="/api/adminDashboard"
          element={user ? <AdminPage /> : <Navigate to="/api/adminLogin" />}
        />
        <Route
          path="/api/adminLogin/forgotPassword"
          element={<ForgotPassword />}
        />
      </Routes>
    </>
  );
};

function App() {
  const [user, setUser] = useState(false);

  const verifyToken = () => {
    const todayDate = new Date();
    const userInfo = localStorage.getItem("adminCred");
    if (userInfo) {
      const { uid, expires } = JSON.parse(userInfo);
      if (expires > todayDate.getTime()) {
        setUser(true);
      }
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes user={user} setUser={setUser} />
    </BrowserRouter>
  );
}

export default App;
