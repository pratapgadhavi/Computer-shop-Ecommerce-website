import React from "react";
import { useNavigate } from "react-router-dom";
import { productsData } from "../../../Data/Data";

const RecentlyLaunched = () => {
  const CategoryData = productsData.find(
    (item) => item.category === "RecentlyLaunched"
  );
  const products = CategoryData?.items;
  const navigate = useNavigate();

  return (
    <div className="py-3 mb-10 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#212529] mb-12">
        {CategoryData.category}
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:gap-x-30 gap-10 lg:gap-y-20 lg:pt-5 px-4">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`${item.path}?cat_id=${item.cat_id}`)}
            className="p-4 shadow-gray-800 shadow-md rounded-xl hover:scale-[1.01] active:border-blue active:border hover:border-blue hover:border transition-transform cursor-pointer"
          >
            <div className="bg-white overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading={item.id === 1 ? "eager" : "lazy"}
                fetchPriority={item.id === 1 ? "high" : "auto"}
                width="390"
                height="213"
                decoding="async"
                className="w-full h-auto md:h-64 object-contain"
              />
              <p className="py-3 text-center lg:text-xl font-bold text-gray-800">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyLaunched;
