import React from "react";
import Carousel from "./CauroselCustom";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <div id="about" className="h-screen flex-col items-center flex bg-primary-100 px-5  overflow-hidden    
     xl:flex-row xl:justify-start xl:items-start 
     lg:pt-10
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
           text-xl
          lg:text-2xl
          md:text-xl 
          sm:text-xl
           "
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Naša priča
        </motion.span>

        <motion.span
          className="uppercase  font-bold 
          text-3xl
          md:text-4xl 
          lg:text-6xl
          sm:text-3xl
          "
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Otkrij radove naših berbera
        </motion.span>

        <motion.span
          className="font-normal   font-inter
          text-lg
          md:text-lg 
          lg:text-xl
          sm:text-xl
          "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Naši talentovani stilisti spajaju tradiciju i inovaciju, koristeći vrhunske proizvode i napredne tehnike kako bi pružili moderne i precizne stilove.
        </motion.span>
      </motion.div>

      {/* Desna strana - Carousel */}
      <motion.div
        className=" mx-auto h-full py-10 
        w-full
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
