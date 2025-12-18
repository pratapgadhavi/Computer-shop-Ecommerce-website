import React from "react";

const categories = [
  { id: 1, name: "CPU", img: "images/SimpleCards/cpu.png" },
  { id: 2, name: "Ram", img: "images/SimpleCards/ram.png" },
  { id: 3, name: "SSD", img: "images/SimpleCards/ssd.png" },
  { id: 4, name: "Screen", img: "images/SimpleCards/monitor.png" },
  { id: 5, name: "Mouse", img: "images/SimpleCards/mouse.png" },
  { id: 6, name: "Keypad", img: "images/SimpleCards/keyboard.png" },
];

const SimpleCard = () => {
  return (
    <div className="w-full bg-[#D1CEFF] lg:py-20 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 lg:gap-16 md:gap-14 gap-9 px-4">
        {categories.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-md shadow-md py-8 flex flex-col justify-center items-center hover:scale-105 hover:shadow-gray-700 hover:shadow-lg active:scale-105 active:shadow-gray-700 active:shadow-lg transition-transform cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              className="w-16 h-16 object-contain"
            />
            <p className="pt-4 text-lg font-semibold text-gray-800">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleCard;
