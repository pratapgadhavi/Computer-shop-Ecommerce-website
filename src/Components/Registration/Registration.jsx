import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};

    if (!form.username) temp.username = "Username is required!";
    if (!form.email) temp.email = "Email is required!";
    if (!form.password) temp.password = "Password is required!";
    if (!form.phone) temp.phone = "Phone No. is required!";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // 2) Check if email already exists
      const emailExists = users.some((u) => u.email === form.email);
      if (emailExists) {
        alert("Email already registered!");
        return;
      }

      // 3) Add new user to array
      users.push(form);

      // 4) Save updated user list
      localStorage.setItem("users", JSON.stringify(users));

      // 5) Optional: Set justLogin flag for welcome message
      localStorage.setItem("justLoggedIn", "true");

      alert("Registration Successful!");
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-center mt-15 items-center min-h-screen bg-blue">
      <div className="bg-white lg:w-[40%] w-[89%] md:w-[65%] my-20 p-5 lg:p-8 rounded-lg shadow-gray-700 shadow-lg">
        <h1 className="md:text-4xl text-3xl font-semibold text-[#212529] text-center mb-4">
          Registration
        </h1>

        <hr className="mb-8 text-gray-400" />

        {/* Username */}
        <label className="font-medium text-[#212529] text-lg mb-2">
          Username :
        </label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
          className={`w-full px-4 my-2 py-1.5 border ${
            errors.username
              ? "border-red-400 focus:ring-4 focus:ring-red-200"
              : "border-gray-300"
          } rounded-lg placeholder:text-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-200 mb-1`}
        />
        {errors.username && (
          <p className="text-red-500 text-md mb-3">{errors.username}</p>
        )}

        {/* Email */}
        <label className="font-medium text-[#212529] text-lg">Email :</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className={`w-full px-4 my-2 py-1.5 border ${
            errors.email
              ? "border-red-400 focus:ring-4 focus:ring-red-200"
              : "border-gray-300"
          } rounded-lg placeholder:text-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-200 mb-1`}
        />
        {errors.email && (
          <p className="text-red-500 text-md mb-3">{errors.email}</p>
        )}

        {/* Password */}
        <label className="font-medium text-[#212529] text-lg">Password :</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          className={`w-full px-4 my-2 py-1.5 border ${
            errors.password
              ? "border-red-400 focus:ring-4 focus:ring-red-200"
              : "border-gray-300"
          } rounded-lg placeholder:text-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-200 mb-1`}
        />
        {errors.password && (
          <p className="text-red-500 text-md mb-3">{errors.password}</p>
        )}

        {/* Phone */}
        <label className="font-medium text-[#212529] text-lg">Phone No :</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className={`w-full my-2 px-4 py-1.5 border ${
            errors.phone
              ? "border-red-400 focus:ring-4 focus:ring-red-200"
              : "border-gray-300"
          } rounded-lg placeholder:text-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-200 mb-1`}
        />
        {errors.phone && (
          <p className="text-red-500 text-md mb-3">{errors.phone}</p>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue text-white font-semibold py-2 rounded-lg mt-4"
        >
          Register
        </button>

        <p className="text-center text-[17px] text-[#212529] font-medium mt-6">
          Have already an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:text-blue-700 text-lg font-semibold cursor-pointer"
          >
            Login Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
