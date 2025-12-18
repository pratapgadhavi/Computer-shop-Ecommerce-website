import React, { useState } from "react";
import { productsData } from "../../Data/Data";
import Model from "../UI/Category-main/Model";

const RAM = () => {
  const CategoryData = productsData.find((item) => item.category === "RAM");
  const products = CategoryData?.items;

  // Modal states
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (item) => {
    setSelectedProduct(item);
    setOpenModal(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen mt-15 px-6 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-gray-800 shadow-md hover:border-blue active:border-blue active:border hover:border p-4 flex flex-col items-center"
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="h-48 hover:scale-90 transition-all active:scale-90 duration-300 object-contain mb-4"
            />

            <h3 className="text-lg font-[#212529] font-semibold mb-2">
              {item.title}
            </h3>

            <button
              onClick={() => handleOpen(item)}
              className="w-full border border-blue text-blue py-2 rounded-sm font-medium mb-3 hover:bg-blue hover:text-white focus:bg-blue focus:text-white transition-all duration-500"
            >
              {CategoryData?.category}
            </button>

            <p className="text-2xl font-semibold">{item.price}</p>
          </div>
        ))}
      </div>
      <Model
        open={openModal}
        product={selectedProduct}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default RAM;
