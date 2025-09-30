import React from "react";
import Carousel from "./CauroselCustom";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <div className="h-screen flex bg-primary-100 ps-10 overflow-hidden xl:pt-30  lg:pt-10">
      {/* Leva strana */}
      <motion.div
        className="w-1/3 flex flex-col gap-6 p-8"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="text-xl font-bold text-primary uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Our Story
        </motion.span>

        <motion.span
          className="uppercase text-6xl font-bold"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover Works of Our Barbers
        </motion.span>

        <motion.span
          className="font-normal text-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Our talented stylists blend tradition with innovation, using <br />
          premium products and advanced techniques to deliver cutting-edge
          styles.
        </motion.span>
      </motion.div>

      {/* Desna strana - Carousel */}
      <motion.div
        className="w-2/3 mx-auto h-full py-10"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.9 }}
        viewport={{ once: true }}
      >
        <Carousel />
      </motion.div>
    </div>
  );
}
