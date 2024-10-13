import React, { useState } from "react";
import { Mail, Lock, AlertCircle } from "lucide-react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config.jsx";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  //   const validateForm = () => {
  //     const newErrors = {};

  //     if (!email) {
  //       newErrors.email = "Email is required";
  //     } else if (!/\S+@\S+\.\S+/.test(email)) {
  //       newErrors.email = "Email is invalid";
  //     }

  //     if (!password) {
  //       newErrors.password = "Password is required";
  //     } else if (password.length < 6) {
  //       newErrors.password = "Password must be at least 6 characters";
  //     } else if (!user) {
  //       newErrors.password = "Incorrect Credentials";
  //     }

  //     setErrors(newErrors);
  //     return Object.keys(newErrors).length === 0;
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const date = new Date();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // setUser(userCredential.user);
      const adminCred = {
        uid: userCredential.user.uid,
        expires: date.getTime() + 1000, // 7 days
      };
      localStorage.setItem("adminCred", JSON.stringify(adminCred));
      setUser(true);
      navigate("/api/adminDashboard");
    } catch (error) {
      // setErrors();
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`pl-10 pr-3 py-2 w-full border rounded-md`}
                placeholder="Enter your email"
              />
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            {/* {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" /> {errors.email}
              </p>
            )} */}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`pl-10 pr-3 py-2 w-full border rounded-md`}
                placeholder="Enter your password"
              />
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            {/* {errors.password && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" /> {errors.password}
              </p>
            )} */}
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
