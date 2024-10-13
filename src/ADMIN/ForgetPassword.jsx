import React, { useState } from "react";
import { auth } from "../Config.jsx"; // Adjust the import according to your file structure
import { sendPasswordResetEmail } from "firebase/auth";
import { ClipLoader } from "react-spinners";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset message
    setError(""); // Reset error

    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent successfully!");
      setLoading(false);
    } catch (err) {
      setError("Failed to send password reset email. Please try again.");
      console.error("Error sending password reset email:", err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-3 pr-3 py-2 w-full border rounded-sm"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 "
            >
              {loading ? (
                <ClipLoader size={20} color="#fff" />
              ) : (
                "Send Password Reset Email"
              )}
            </button>
          </div>
        </form>
        {message && <p className="text-green-600 mt-4">{message}</p>}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
