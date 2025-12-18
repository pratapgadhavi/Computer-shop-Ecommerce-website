import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { productsData } from "../../../Data/Data";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Model = ({ open, onClose, product }) => {
  const [qty, setQty] = useState(1);

  const categoryData = productsData.find((item) => item.category === "Monitor");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();

  if (!open || !product) return null;

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      exist.qty += qty; // update qty
    } else {
      cart.push({ ...product, qty }); // add qty
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success("Added to Cart");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[90%] md:w-[70%] lg:w-[60%] p-3 md:p-6 relative shadow-xl transition-all">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-600 hover:text-black text-2xl"
        >
          <IoClose />
        </button>

        <h2 className="text-2xl font-semibold mb-3 md:mb-6">Product Details</h2>

        <div className="flex flex-col lg:flex-row gap-3 md:gap-6">
          {/* Left image */}
          <div className="w-full lg:w-80">
            <img
              src={product.img}
              alt={product.title}
              loading="lazy"
              className="md:h-[80%] h-[50%] object-contain"
            />
          </div>

          {/* Right content */}
          <div className="w-full lg:w-1/2 space-y-4">
            <p className="text-xl font-bold">
              Product Name: <span className="font-normal">{product.title}</span>
            </p>

            <p className="md:text-lg font-bold">
              Product Description:{" "}
              <span className="font-normal">{product.desc}</span>
            </p>

            <p className="text-lg font-bold">
              Product Category:{" "}
              <span className="font-normal">{categoryData?.category}</span>
            </p>

            <p className="text-lg font-bold">
              Product Price:{" "}
              <span className="font-normal">{product.price}</span>
            </p>

            {/* Quantity */}
            <div>
              <label className="font-bold text-lg">Quantity:</label>
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="border px-1 py-0.5 w-24 rounded-sm ml-2"
              />
            </div>
          </div>
        </div>

        {/* Add to Cart */}
        <div
          onClick={() => {
            if (isLoggedIn) {
              handleAddToCart();
            } else {
              navigate("/login");
            }
          }}
          className="md:mt-6 mt-4 flex justify-end"
        >
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
