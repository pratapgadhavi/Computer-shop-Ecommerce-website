import React, { useEffect, useState } from "react";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <div className="grid lg:pt-20 md:pt-10 pt-5 grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className={`
            order-2 md:order-1
            transition-all duration-700 
            ${
              animate
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-48"
            }
          `}
        >
          <h1 className="lg:text-4xl md:text-xl text-[#212529] lg:leading-snug font-bold font-sans mb-5.5">
            Unleash Your Digital Potential with Cutting-Edge Computer Parts
          </h1>
          <p
            className={`lg:text-[18px] text-[12px] lg:text-start text-justify text-[#868686] font-semibold md:-tracking-tighter tracking-wider mb-7 lg:mb-12 transition-all duration-1000   ${
              animate
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-56"
            }`}
          >
            Welcome to Computer Hub, your ultimate destination for online
            computer parts shopping! Discover a treasure trove of
            top-of-the-line components, where innovation meets performance. Our
            extensive collection caters to tech enthusiasts, gamers,
            professionals, and DIY enthusiasts a like
          </p>

          <div onClick={() => navigate("monitor")}>
            <Button
              text="About Shop"
              px="px-10"
              py="py-2"
              rounded="rounded-[8px]"
            />
          </div>
        </div>
        <div
          className={`
            order-1 md:order-2
            transition-all duration-700 
            ${
              animate
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-y-28"
            }
          `}
        >
          <img
            src="images/Hero/home.jpeg"
            className="w-full h-auto"
            alt="Hero Banner"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1400"
            height="600"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
