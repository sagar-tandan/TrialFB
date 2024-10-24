import React, { useEffect, useState } from "react";
import DataTable from "./ADMIN/Table";
import AdminPage from "./ADMIN/AdminPage";
import LoginPage from "./ADMIN/LoginPage";
import ForgotPassword from "./ADMIN/ForgetPassword.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./USER/HomePage.jsx";
import ProductDetail from "./USER/ProductDetail.jsx";
import ProductPage from "./USER/ProductPage.jsx";
import { Contact } from "lucide-react";
import ContactDetail from "./USER/ContactDetail.jsx";

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
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/products" element={<ProductPage />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
          <Route path="/contact" element={<ContactDetail />}></Route>

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
