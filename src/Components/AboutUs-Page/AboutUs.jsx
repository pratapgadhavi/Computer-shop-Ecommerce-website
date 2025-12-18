import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="w-full mt-10 bg-white py-10 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="w-full">
            <img
              src="/svg/about.svg"
              alt="About Us"
              loading="lazy"
              className="w-[93%] h-full object-cover"
            />
          </div>

          {/* Right Text */}
          <div>
            <h2 className="text-2xl text-center md:text-start lg:text-5xl font-bold text-gray-900 mb-4">
              Welcome to <br />
              our Computer Shop!
            </h2>

            <p className="text-[#919191] font-semibold text-center md:text-start lg:leading-relaxed lg:text-lg mb-4">
              At our computer shop, we strive to be your one-stop destination
              for all your computing needs. Whether you're a tech enthusiast, a
              professional, or a casual user, we have everything you need to
              enhance your digital experience.
            </p>

            <p className="text-[#919191] text-center md:text-start font-semibold lg:text-lg lg:leading-relaxed">
              We understand the importance of affordability, so we strive to
              provide competitive pricing without compromising on quality. Our
              aim is to deliver exceptional value for your investment, ensuring
              that you get the best performance and reliability for your budget.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
