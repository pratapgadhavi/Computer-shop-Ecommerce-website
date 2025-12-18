import React, { useEffect, useState } from "react";
import { FiTrash2, FiEdit2, FiCheck, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const deleteItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const enableEdit = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, editing: true, tempQty: item.qty } : item
      )
    );
  };

  // save qty
  const saveQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, qty: Number(item.tempQty), editing: false }
        : item
    );

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // cancel
  const cancelEdit = (id) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, editing: false } : item))
    );
  };

  // handle input edit
  const handleQtyChange = (id, value) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, tempQty: value } : item))
    );
  };

  // total price
  const total = cart.reduce(
    (sum, item) => sum + item.qty * Number(String(item.price).replace("₹", "")),
    0
  );

  return (
    <>
      <div className="bg-[#f2f2f2] mt-15 min-h-screen p-3.5 md:p-10">
        <h1 className="text-4xl text-center font-bold mb-10">Cart</h1>

        <div className="bg-white rounded-xl mx-auto lg:w-[85%] shadow-lg p-4">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b text-gray-900 border-gray-400 p-4 font-semibold text-lg">
                <tr>
                  <th className="pr-4">#</th>
                  <th className="pr-6 md:pr-0">Product Img</th>
                  <th className="pr-10 md:pr-0">Product Name</th>
                  <th className="pr-14 md:pr-0">Quantity</th>
                  <th className="pr-6 md:pr-0">Price</th>
                  <th className="pr-4 md:pr-0">Total</th>
                  <th className="pr-0 md:pr-0">Action</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item, index) => (
                  <tr
                    key={item.id}
                    className="text-center border-gray-400 border-b"
                  >
                    <td className="py-4">{index + 1}</td>

                    <td className="flex justify-center py-4">
                      <img
                        src={item.img}
                        loading="lazy"
                        className="w-16 h-16 object-contain"
                      />
                    </td>

                    <td className="font-medium">{item?.title}</td>

                    {/* Quantity Input */}
                    <td>
                      <div className="flex justify-center items-center gap-2">
                        <input
                          min={0}
                          type="number"
                          value={item.editing ? item.tempQty : item.qty}
                          onChange={(e) =>
                            handleQtyChange(item.id, e.target.value)
                          }
                          readOnly={!item.editing}
                          className={`border px-2 w-20 rounded ${
                            item.editing
                              ? "border-blue-500 bg-white"
                              : "bg-gray-100 cursor-not-allowed"
                          }`}
                        />

                        {/* If editing → show save + cancel */}
                        {item.editing ? (
                          <>
                            <button
                              onClick={() => saveQty(item.id)}
                              className="bg-green-800 text-white p-2 rounded"
                            >
                              <FiCheck size={16} />
                            </button>

                            <button
                              onClick={() => cancelEdit(item.id)}
                              className="bg-red-600 text-white p-2 rounded"
                            >
                              <FiX size={16} />
                            </button>
                          </>
                        ) : (
                          // Show edit button only when not editing
                          <button
                            onClick={() => enableEdit(item.id)}
                            className="bg-green-800 text-white p-2 rounded"
                          >
                            <FiEdit2 size={16} />
                          </button>
                        )}
                      </div>
                    </td>

                    <td className="font-semibold">{item.price}</td>
                    <td className="font-semibold">
                      ₹{item.qty * Number(String(item.price).replace("₹", ""))}
                    </td>

                    <td>
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="bg-red-600 text-white p-2 rounded"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Price */}
          <div className="text-right text-xl font-semibold mt-8">
            Total Price: <span className="text-gray-700">{total}</span>
          </div>
        </div>
        <div className="bg-white mt-3 rounded-xl mx-auto lg:w-[85%] shadow-lg p-1.5 overflow-x-auto">
          {/* Checkout */}
          <div
            onClick={() => {
              if (cart.length >= 1) {
                navigate("/checkout");
              }
            }}
            className="flex justify-end"
          >
            <button className="bg-blue-500 active:bg-blue-600 hover:bg-blue-600 text-white px-5 py-1.5 rounded-lg text-lg">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
