import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-purple-50 px-4">
      
      <div className="relative text-center bg-white rounded-2xl shadow-xl p-10 md:p-14 max-w-xl w-full overflow-hidden">

        {/* Floating circles animation */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>

        {/* 404 animated text */}
        <h1 className="text-[90px] md:text-[110px] font-extrabold text-blue-600 animate-bounce">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
          Oops! Page not found
        </h2>

        <p className="mt-3 text-gray-600 leading-relaxed">
          The page you’re trying to access doesn’t exist or has been moved.
          Please check the URL or go back to home.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
