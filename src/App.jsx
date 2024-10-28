import React, { useEffect, useState } from "react";
import AdminPage from "./ADMIN/AdminPage";
import LoginPage from "./ADMIN/LoginPage";
import ForgotPassword from "./ADMIN/ForgetPassword.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./USER/HomePage/MainPage.jsx";
import ProductDetail from "./USER/ProductDetail.jsx";
import ContactParent from "./USER/ContactPage/ContactParent.jsx";
import AboutUsParent from "./USER/AboutUsPage/AboutUsParent.jsx";
import ParentProduct from "./USER/ProductPage/ParentProduct.jsx";

function App() {
  const [user, setuser] = useState(false);

  const verifyToken = () => {
    const todayDate = new Date();
    const userInfo = localStorage.getItem("adminCred");
    if (userInfo) {
      const { uid, expires } = JSON.parse(userInfo);
      if (expires > todayDate.getTime()) {
        setuser(true);
      }
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/products" element={<ParentProduct />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
          <Route path="/contact" element={<ContactParent />}></Route>
          <Route path="/aboutus" element={<AboutUsParent />}></Route>

          <Route
            path="/api/adminLogin"
            element={
              user ? (
                <Navigate to="/api/adminDashboard" />
              ) : (
                <LoginPage setUser={setuser} />
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
      </BrowserRouter>
    </div>
  );
}

export default App;
