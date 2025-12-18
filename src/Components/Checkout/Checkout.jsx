import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.qty * Number(item.price.replace("₹", "")),
    0
  );

  const validate = () => {
    let newErrors = {};

    if (!city.trim()) {
      newErrors.city = "City is required";
    } else if (city.length < 3) {
      newErrors.city = "City must be at least 3 characters";
    }

    if (!/^\d{6}$/.test(pincode)) {
      newErrors.pincode = "Pincode must be 6 digits";
    }

    if (!address.trim()) {
      newErrors.address = "Address is required";
    } else if (address.length < 10) {
      newErrors.address = "Address must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrder = () => {
    if (!validate()) return false;

    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    if (cartData.length === 0) return false;

    // 🔹 old orders (array of objects)
    const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // 🔹 cart ke sab objects push (NO NESTED ARRAY)
    const updatedOrders = [...oldOrders, ...cartData];

    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    // 🔹 clear cart
    localStorage.removeItem("cart");

    setCity("");
    setPincode("");
    setAddress("");
    setErrors({});

    return true;
  };

  return (
    <div className="bg-gray-100 mt-15 min-h-screen p-4 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* LEFT – Delivery Details */}
        <div className="bg-white order-3 md:mt-auto lg:mt-0 lg:order-1 rounded-xl shadow p-5">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-400 pb-2">
            Delivery Details
          </h2>

          <div className="max-h-[85vh] px-1.5 overflow-y-auto">
            <label className="font-medium text-lg">Username :</label>
            <br />
            <input
              value={user?.username}
              disabled
              className="input bg-[#e9ecef] mt-1 opacity-90 border-green-300 border p-2 lg:w-83 w-full rounded-md"
            />

            <label className="font-medium mt-3 text-lg block">Email :</label>
            <input
              value={user.email}
              disabled
              className="input bg-[#e9ecef] mt-1 opacity-90 border-green-300 border p-2 lg:w-83 w-full rounded-md"
            />

            <label className="font-medium mt-3 text-lg block">Phone No :</label>
            <input
              value={user.phone}
              disabled
              className="input bg-[#e9ecef] mt-1 opacity-90 border-green-300 border p-2 lg:w-83 w-full rounded-md"
            />

            <div className="flex items-center gap-2 mt-3">
              <input type="checkbox" checked readOnly />
              <span className="text-gray-500 font-semibold">
                Cash On Delivery
              </span>
            </div>

            <label className="font-medium text-lg mt-1 block">City :</label>
            <input
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="input mt-1 border-green-300 border p-2 lg:w-83 w-full rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
            {errors.city && (
              <p className="error text-red-500 font-medium">{errors.city}</p>
            )}

            <label className="font-medium text-lg mt-3 block">Pincode :</label>
            <input
              placeholder="Enter Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
              type="number"
              className="input mt-1 border-green-300 border p-2 lg:w-83 w-full rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
            {errors.pincode && (
              <p className="error text-red-500 font-medium">{errors.pincode}</p>
            )}

            <label className="font-medium text-lg mt-3 block">Address :</label>
            <textarea
              placeholder="Full Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="input mt-1 border-green-300 border h-20 p-2 lg:w-83 w-full rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
            {errors.address && (
              <p className="error text-red-500 font-medium">{errors.address}</p>
            )}

            <button
              onClick={() => {
                const success = handleOrder();
                if (success) {
                  navigate("/order-success");
                }
              }}
              className="mt-5 lg:w-83 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
            >
              Order Now
            </button>
          </div>
        </div>

        {/* CENTER – User Info + Totals */}
        <div className="space-y-4 order-2 lg:order-2">
          <div className="bg-white rounded-xl shadow p-3 md:p-5 flex items-center gap-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="w-14"
            />
            <div>
              <p className="font-medium">
                <b>Username :</b> {user.username}
              </p>
              <p className="font-medium text-nowrap">
                <b>Email :</b> {user.email}
              </p>
              <p className="font-medium">
                <b>Session :</b>{" "}
                <span className="text-green-700 font-semibold">Active</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-gray-500 font-semibold">Total Products:</p>
            <p className="text-xl font-semibold">{totalQty}</p>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-gray-500 font-semibold">Total Price:</p>
            <p className="text-xl font-semibold">₹{totalPrice}</p>
          </div>
        </div>

        {/* RIGHT – Cart Summary */}
        <div className="bg-white rounded-xl order-1 lg:order-3 shadow md:p-5 p-3">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-400 pb-2">
            Cart Summary
          </h2>
          <div className="max-h-[90vh] overflow-y-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-3 border-b md:p-3 border-gray-400 last:border-none"
              >
                <img
                  src={item.img}
                  className="md:w-16 w-14 h-14 md:h-16 object-contain"
                />

                <p className="flex-1 ml-3 font-medium">{item.title}</p>

                <p className="md:pr-13 pr-5 text-center">{item.qty}</p>

                <p className="font-semibold">
                  ₹{item.qty * Number(item.price.replace("₹", ""))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
