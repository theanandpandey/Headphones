import React from "react";

const BannerText = () => {
  return (
    <section className="py-14 text-center font-varela">
      <div className="container">
        <div className="bg-gradient-to-t from-primary to-primary/80 text-white rounded-3xl p-12 md:p-16 hover:scale-105 duration-300 hover:shadow-2xl transition-all">
          <p className="font-bold text-4xl md:text-5xl max-w-[750px] mx-auto leading-snug tracking-wide">
            Headphones With Good Quality And Affordable Price
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerText;
