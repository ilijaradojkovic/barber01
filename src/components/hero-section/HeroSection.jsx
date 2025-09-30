import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="h-screen text-white flex items-center pt-20 px-10 overflow-hidden">
      {/* Leva strana - tekst */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-2xl text-primary uppercase tracking-wider lg:text-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Transform Your Look
          </motion.span>

          <motion.h1
            className="text-8xl font-bold leading-tight uppercase lg:text-6xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Experience the <br /> Art of the <br /> Perfect Cut
          </motion.h1>

          <motion.span
            className="opacity-50 mt-4 text-2xl border-l-4 text-start border-l-primary px-3 py-1 normal-case  lg:text-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Step in for a transformative experience that leaves you feeling <br /> confident and refreshed.
          </motion.span>

          <motion.button
            className="mt-6 bg-primary-light text-2xl text-black uppercase px-6 py-3 w-max cursor-pointer hover:bg-orange-500 transition-colors  lg:text-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Submit Request &rarr;
          </motion.button>

          {/* Ikone i telefon */}
          <motion.div
            className="flex justify-center flex-col gap-4 mt-10 xl:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <div className="flex gap-3">
              {["F", "X", "I"].map((icon, i) => (
                <motion.div
                  key={icon}
                  className="w-15 h-15 bg-gray-600 rounded-full flex items-center text-xl justify-center hover:bg-gray-500 cursor-pointer lg:w-10 lg:h-10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + i * 0.2, duration: 0.5 }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
            <span className="text-primary font-bold text-6xl lg:text-4xl">
              (325) 641-8294
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Desna strana - slika */}
      <motion.div
        className="flex-1 flex justify-start h-full lg:justify-end lg:items-end"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <img
          className="w-auto transform scale-108 mt-10 lg:scale-100 "
          src="./hero01.png"
          alt="Barber"
        />
      </motion.div>
    </div>
  );
}
