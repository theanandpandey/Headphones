import React from "react";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";

const ServicesData = [
  {
    id: 1,
    title: "High-Quality Audio",
    icon: Icon1,
    desc: "Ensuring top-notch security for all your needs with advanced protection measures.",
  },
  {
    id: 2,
    title: "Fast & Secure Delivery",
    icon: Icon2,
    desc: "Get your orders delivered quickly with real-time tracking.",
  },
  {
    id: 3,
    title: "24/7 Customer Support",
    icon: Icon3,
    desc: "We are available round-the-clock to assist you with any queries.",
  },
];

const Services = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center pb-10">Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ServicesData.map((data) => (
              <div
                key={data.id}
                className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img src={data.icon} alt=""  className="w-[80px] h-[80px] object-contain mb-4"  />
                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold">{data.title}</h1>
                  <p className="text-center text-sm text-black/75">{data.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
