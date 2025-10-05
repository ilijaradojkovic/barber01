import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div
      className="h-screen text-white flex flex-col items-center  px-10 overflow-hidden
  md:flex-row 
  sm:pt-0
  "
    >
      {/* Leva strana - tekst */}
      <div className=" flex flex-col justify-center items-center text-center gap-6
      md:flex-1">
        <motion.div
          className="flex flex-col gap-4
        lg:items-start 
        md:items-start md:h-full 
        sm:items-center  sm:h-[50vh]
          "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-primary uppercase tracking-wider 
            xl:text-2xl 
            lg:text-xl
             md:text-xl 
             sm:text-lg
             "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Transform Your Look
          </motion.span>

          <motion.h1
            className="  font-bold leading-tight uppercase 
            xl:text-8xl
             lg:text-6xl 
             md:text-6xl md:text-start
             sm:text-4xl 

             "
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Experience the <br /> Art of the <br /> Perfect Cut
          </motion.h1>

          <motion.span
            className="opacity-50 mt-4   text-start  px-3 py-1 normal-case  
            xl:text-2xl 
            lg:text-xl
             md:text-xl md:border-l-4 md:border-l-primary md:text-start
             sm:text-lg sm:text-center
            "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Step in for a transformative experience that leaves you feeling{" "}
            <br /> confident and refreshed.
          </motion.span>

          <motion.button
            className="mt-6 bg-primary-light text-black uppercase px-6 py-3 w-max cursor-pointer hover:bg-orange-500 transition-colors  
             xl:text-2xl
            lg:text-xl 
            md:text-xl
            sm:text-lg
            "
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
                  className="xl:w-15 xl:h-15 bg-gray-600 rounded-full flex items-center text-xl justify-center hover:bg-gray-500 cursor-pointer 
                  lg:w-10 lg:h-10 
                  md:w-10 md:h-10
                  sm:w-7 sm:h-7
                  "
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + i * 0.2, duration: 0.5 }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
            <span
              className="text-primary font-bold 
            xl:text-6xl 
            lg:text-4xl
             md:text-4xl
             sm:text-2xl
             "
            >
              (325) 641-8294
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Desna strana - slika */}
      <motion.div
        className=" flex justify-center items-center
        
       rounded-2xl overflow-show  
      
      md:h-full md:flex-1 md:items-end
      sm:h-[50vh]  sm:w-full sm:items-end
      "
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <img
          className="w-auto  transform 
          xl:scale-130 
         lg:h-[70%]  
         md:h-[60%] md:scale-130
         sm:h-[85%] sm:scale-110

         "
          src="./hero01.png"
          alt="Barber"
        />
      </motion.div>
    </div>
  );
}
