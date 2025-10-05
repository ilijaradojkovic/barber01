import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    service: "Classic Haircut",
    description: "A timeless cut tailored to your personal style.",
    price: "25",
  },
  {
    service: "Modern Fades & Tapers",
    description:
      "Precision fades, tapers, or undercuts for a fresh, contemporary look.",
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
    <div
      className="min-h-screen flex flex-col relative bg-primary-100  overflow-visible
      lg:flex-row lg:items-center lg:justify-center lg:h-screen lg:gap-10
      sm:gap-0
      
      "
    >
      {/* Ukrasna slika (makaze) */}
      <motion.img
        className="absolute -top-40 left-0 w-40 z-10
        md:-top-12 md:w-52
        lg:-top-16 lg:w-64
        xl:-top-50 xl:left-10 xl:w-72"
        src="./images/scissors.png"
        alt="Scissors"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      {/* Leva strana - slika */}
      <motion.div
        className="flex justify-center items-center w-full lg:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          className="rounded-2xl w-[80%] rotate-90
          lg:rotate-0 lg:w-[60%]
          md:w-[50%]   md:rotate-90 "
          src="./images/prices.jpg"
          alt="Prices"
        />
      </motion.div>

      {/* Desna strana - tekst i cene */}
      <motion.div
        className="flex justify-center items-center w-full   text-black py-10 
        lg:py-0 lg:w-1/2 
        sm:py-0
        "
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-[85%] flex flex-col gap-6">
          <motion.span
            className="uppercase text-2xl font-bold text-primary"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Our Prices
          </motion.span>

          <motion.span
            className="uppercase text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Quality Cuts at Honest Prices
          </motion.span>

          {/* Lista usluga */}
          <motion.div
            className="flex flex-col gap-10 mt-10 w-full"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
          >
            {data.map((ele, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-3 border-b-2 border-black/50 items-start w-full pb-3"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-between gap-3 w-full">
                  <span className="text-2xl md:text-3xl">{ele.service}</span>
                  <span className="text-2xl md:text-3xl">{ele.price}$</span>
                </div>
                <span className="text-lg md:text-xl">{ele.description}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
