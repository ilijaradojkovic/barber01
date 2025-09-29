import React from "react";

const data = [
  {
    service: "Classic Haircut",
    description: "A timeless cut tailored to your personal style.",
    price: "25",
  },
  {
    service: "Modern Fades & Tapers",
    description: "Precision fades, tapers, or undercuts for a fresh, contemporary look.",
    price: "35",
  },
  {
    service: "Beard Trimming & Shaping",
    description: "A timeless cut tailored to your personal style.",
    price: "25",
  },
  {
    service: "Hot Towel Shave",
    description: "A timeless cut tailored to your personal style.",
    price: "35",
  },
  {
    service: "Scalp Treatments & Massage",
    description: "A timeless cut tailored to your personal style.",
    price: "45",
  },
 
];

export default function PricesSection() {
  return (
    <div className="h-screen flex relative bg-primary-100 gap-10">
        <img  className="absolute -top-60 w-sm" src="./images/scissors.png"/>
      <div className="flex-1 flex justify-end items-center  ">
        <img className="rounded-2xl h-[80%] w-[60%]" src="./images/prices.jpg" />
      </div>
      <div className="flex-1 flex  justify-start items-center">
        <div className="w-[80%] h-[80%]   flex flex-col gap-3">
          <span className="uppercase text-2xl font-bold text-primary">
            Our Prices
          </span>
          <span className="uppercase text-6xl font-bold">
            Quality Cuts at Honest Prices
          </span>
          <div className="flex flex-col gap-10 mt-10 w-full">
            {data.map((ele) => (
              <div className="flex flex-col gap-3 border-b-2 border-black/50 items-start w-full">
                <div className="flex justify-between  gap-3 w-full">
                  <span className="text-3xl">{ele.service}</span>
                  <span className="text-3xl">{ele.price}$</span>
                </div>
                <span className="text-xl">{ele.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
