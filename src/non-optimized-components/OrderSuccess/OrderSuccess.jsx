// import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 text-center animate-fadeIn">
        {/* ICON */}
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-4 rounded-full animate-bounceSlow">
            {/* <CheckCircle className="w-14 h-14 text-green-600" /> */}
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Order Successfully Completed 🎉
        </h1>

        {/* MESSAGE */}
        <p className="text-gray-500 mb-6">
          Thank you for your purchase. Your order has been placed successfully
          and will be delivered soon.
        </p>

        {/* INFO BOX */}
        <div className="bg-gray-50 border rounded-lg p-4 text-left mb-6">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Payment Mode:</span> Cash On
            Delivery
          </p>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-semibold">Order Status:</span> Confirmed
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="w-full py-2 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            View Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
