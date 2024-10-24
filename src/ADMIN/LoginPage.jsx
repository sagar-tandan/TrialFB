import React, { useState } from "react";
import { Mail, Lock, AlertCircle } from "lucide-react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config.jsx";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { div } from "framer-motion/client";

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [forgetPass, setForgotPass] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      const date = new Date();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const adminCred = {
        uid: userCredential.user.uid,
        expires: date.getTime() + 7 * 24 * 60 * 60 * 1000, // 7 days
      };

      localStorage.setItem("adminCred", JSON.stringify(adminCred));
      setUser(true);
      setLoading(false);
      navigate("/api/adminDashboard");
    } catch (error) {
      setError("Invalid Credentials");
      console.error("Error registering user:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4 relative">
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
                className={`pl-10 pr-3 py-2 w-full border rounded-sm`}
                placeholder="Enter your email"
                required
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
                className={`pl-10 pr-3 py-2 w-full border rounded-sm`}
                placeholder="Enter your password"
                required
              />
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            {error && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" /> {error}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
            >
              {loading ? <ClipLoader size={20} color="#fff" /> : "Sign In"}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <a
            onClick={() => {
              navigate("/api/adminLogin/forgotPassword");
            }}
            className="text-sm text-purple-600 hover:text-purple-500 cursor-pointer"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
