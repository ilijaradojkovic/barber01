import React from "react";
import Carousel from "./CauroselCustom";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <div className="h-screen flex bg-primary-100 ps-10 overflow-hidden   lg:pt-10 
     xl:flex-row xl:justify-start xl:items-start 
    sm:flex-col sm:justify-center sm:items-center sm:pt-30
    ">
      {/* Leva strana */}
      <motion.div
        className=" flex  flex-col gap-6 p-8 
        md:w-[80%] 
       "
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="font-bold text-primary uppercase
           
           lg:text-2xl
          md:text-xl 
          sm:text-xl
           "
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Our Story
        </motion.span>

        <motion.span
          className="uppercase  font-bold 
          md:text-4xl 
          lg:text-6xl
          sm:text-3xl
          "
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover Works of Our Barbers
        </motion.span>

        <motion.span
          className="font-normal  
          md:text-lg 
          lg:text-xl
          sm:text-xl
          "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Our talented stylists blend tradition with innovation, using 
          premium products and advanced techniques to deliver cutting-edge
          styles.
        </motion.span>
      </motion.div>

      {/* Desna strana - Carousel */}
      <motion.div
        className=" mx-auto h-full py-10 
        md:w-[80%] 
        lg:w-2/3
        sm:w-full"
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
