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
    <div className="h-screen flex relative bg-primary-100 gap-10 overflow-hidden">
      <motion.img
        className="absolute -top-60 w-sm z-10 xl:-top-10 xl:left-0 xl:w-xs lg:-top-15 lg:w-2xs"
        src="./images/scissors.png"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      {/* Leva strana - slika */}
      <motion.div
        className="flex-1 flex justify-end items-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          className="rounded-2xl h-[80%] w-[60%] lg:w-[70%]"
          src="./images/prices.jpg"
          alt="Prices"
        />
      </motion.div>

      {/* Desna strana - tekst */}
      <motion.div
        className="flex-1 flex justify-start items-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-[80%] h-[80%] flex flex-col gap-3">
          <motion.span
            className="uppercase text-2xl font-bold text-primary"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Our Prices
          </motion.span>

          <motion.span
            className="uppercase text-6xl font-bold"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Quality Cuts at Honest Prices
          </motion.span>

          {/* Lista sa stagger animacijom */}
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
                className="flex flex-col gap-3 border-b-2 border-black/50 items-start w-full"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-between gap-3 w-full">
                  <span className="text-3xl">{ele.service}</span>
                  <span className="text-3xl">{ele.price}$</span>
                </div>
                <span className="text-xl">{ele.description}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
