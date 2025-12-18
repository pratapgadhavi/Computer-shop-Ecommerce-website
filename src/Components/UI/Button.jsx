import React from "react";

const Button = ({
  text,
  px = "px-6",
  py = "py-1",
  rounded = "rounded-[15px]",
}) => {
  return (
    <div>
      <button
        className={`${px} ${py} ${rounded} lg:text-xl border-2 border-blue text-blue font-semibold hover:bg-blue active:bg-blue active:text-white     
                focus:bg-blue focus:text-white hover:text-white transition-colors`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
