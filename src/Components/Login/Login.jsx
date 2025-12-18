import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
      alert("No user found! Please register first.");
      navigate("/registration");
      return;
    }

    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(foundUser));
      localStorage.setItem("justLoggedIn", "true");

      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen mt-12 flex items-center justify-center bg-blue">
      <div className="bg-white lg:w-[45%] xl:w-[37%] 2xl:w-[40%] md:w-[65%] w-[85%] p-10 rounded-lg shadow-lg">
        <h2 className="text-[33px] text-[#212529] font-semibold text-center mb-10">
          Login
        </h2>

        {/* Username */}
        <label className="block text-[#212529] font-medium text-lg mb-2">
          Username :
        </label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-5 placeholder:text-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-200"
        />

        {/* Password */}
        <label className="block font-medium text-[#212529] text-lg mb-2">
          Password :
        </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-4 focus:ring-blue-200"
        />

        {/* Signup link */}
        <p className="text-md mb-6">
          Don't have an Account?{" "}
          <a
            onClick={() => navigate("/registration")}
            href="#"
            className="text-[#0d6efd] font-semibold hover:text-blue-700 hover:underline"
          >
            Create an account
          </a>
        </p>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 mb-5 rounded-md text-lg transition-all"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
