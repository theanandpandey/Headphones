import React from "react";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";

const headphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: (
      <>
        <span className="whitespace-nowrap">Headphones</span> <br /> Wireless
      </>
    ),
    subtitle:
      "Experience high-quality sound with our wireless headphones, designed for comfort and deep bass.",
    price: "$100",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: (
      <>
        <span className="whitespace-nowrap">Headphones</span> <br /> Wireless 2
      </>
    ),
    subtitle:
      "Immerse yourself in music with noise cancellation and crystal-clear audio.",
    price: "$120",
    modal: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: (
      <>
        <span className="whitespace-nowrap">Headphones</span> <br /> Wireless 3
      </>
    ),
    subtitle:
      "Premium design with long battery life and Bluetooth 5.0 connectivity.",
    price: "$150",
    modal: "Ocean Blue",
    bgColor: "#5d818c",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <section className="bg-brandDark text-white font-varela">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px] px-12 md:px-20"> 
        {/* Left Section */}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]"> 
          <div className="space-y-5 text-center md:text-left mt-[-10px]">
            <h1 className="text-4xl lg:text-6xl font-bold mt-[-20px]">{activeData.title}</h1> 
            <p className="text-sm leading-relaxed text-white/80">{activeData.subtitle}</p>

            <button
              style={{ backgroundColor: activeData.bgColor }}
              className="px-5 py-3 inline-block font-normal rounded-md text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              Buy and Listen
            </button>

            {/* Separator */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-10">
              <div className="w-16 h-[2px] bg-white"></div>
              <p className="uppercase text-sm tracking-wider">Top Headphones for You</p>
              <div className="w-16 h-[2px] bg-white"></div>
            </div>
          </div>

          {/* Headphone Switcher */}
          <div className="grid grid-cols-3 gap-5 mt-5">
            {headphoneData.map((item) => (
              <div
                key={item.id}
                onClick={() => handleActiveData(item)}
                className={`p-2 flex flex-col items-center cursor-pointer border rounded-md transition-transform duration-300 hover:scale-105 ${
                  activeData.id === item.id ? "border-white bg-white/10" : "border-transparent"
                }`}
              >
                <img src={item.image} alt="" className="w-[60px] h-auto" loading="lazy" /> {/* Reduced size */}
                <p className="text-sm font-bold mt-2">{item.price}</p>
                <p className="text-xs font-normal text-white/75">{item.modal}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Main Headphone Image) */}
        <div className="flex flex-col justify-end items-center">
          <img
            src={activeData.image}
            alt="Headphone"
            className="w-[350px] md:w-[450px] xl:w-[550px] transition-transform duration-500 ease-in-out"
            loading="lazy"
          />
        </div>

        {/* WhatsApp Icon */}
        <div className="fixed bottom-10 right-10 text-3xl text-white hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
          <a href="#">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
