import React from "react";

const MyOrder = () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <div className="mt-15 min-h-screen bg-[#f2f2f2] p-5 md:p-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-700 border-gray-400 font-semibold text-lg border-b">
              <th className="py-3 pr-4">#</th>
              <th className="py-3 pr-10 md:pr-0">Product Image</th>
              <th className="py-3 pr-30 md:pr-0">Product Name</th>
              <th className="py-3 pr-8 md:pr-0">Quantity</th>
              <th className="py-3 pr-6 md:pr-0">Price</th>
              <th className="py-3 pl-10">Status</th>
            </tr>
          </thead>

          {isLoggedIn ? (
            orders.length > 0 ? (
              <tbody className="text-gray-900">
                {orders.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-400 hover:bg-[#f2f2f2] last:border-none"
                  >
                    <td className="py-0.5 font-semibold">{index + 1}</td>

                    <td className="py-0.5">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-16 h-16 object-contain"
                      />
                    </td>

                    <td className="py-1.5 font-medium">{item.title}</td>
                    <td className="py-1.5">{item.qty}</td>
                    <td className="py-1.5">{item.price}</td>

                    <td className="py-1.5 pl-5 md:pl-0">
                      <span className="px-4 py-2 text-white bg-blue font-semibold rounded-lg">
                        In Process
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td
                    colSpan="6"
                    className="text-center font-semibold text-lg py-10 text-gray-500"
                  >
                    No orders found
                  </td>
                </tr>
              </tbody>
            )
          ) : (
            <tbody>
              <tr>
                <td
                  colSpan="6"
                  className="text-center font-semibold text-lg py-10 text-gray-500"
                >
                  Please login to view your orders
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
