import React from "react";

const Cards = ({ img, title, price, ratings }) => {
  return (
    <section className="mt-5 container mx-auto">
      {/* Card */}
      <div className=" rounded-xl w-full h-auto mt-4  mx-auto ">
        <img src={img} alt="img" className="rounded-xl w-full h-52" />

        <div className=" px-4 py-5 rounded-xl">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-gray-400">{price}</p>
          <p>
            <i className="fa-solid fa-star text-gray-400 text-sm"></i> {ratings}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
