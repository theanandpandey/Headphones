import React from "react";
import Headphone4 from "../../assets/headphone4.png";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
        {/* Banner Image */}
        <div className="flex justify-center">
          <img src={Headphone4} alt="Headphone" className="w-[280px] md:w-[400px]" />
        </div>

        {/* Banner Text Info */}
        <div className="text-center md:text-left space-y-5 max-w-lg mx-auto md:mx-0">
          <h1 className="text-3xl lg:text-4xl font-semibold font-poppins leading-snug">
            The Latest Headphones With The Latest Technology
          </h1>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Experience high-quality sound and cutting-edge technology designed for superior comfort and performance.
          </p>
          <button className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md transition-all duration-300 hover:bg-[#e33343] hover:text-white">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
