import React from "react";
import MapWithOverlay from "./Map";
import {
  MdLocationOn,
  MdPhone,
  MdOutlineWhatsapp,
  MdWhatsapp,
} from "react-icons/md";
import { motion } from "framer-motion";

export default function SectionLocation() {
  return (
    <div
      className=" bg-primary-100 flex justify-center items-center gap-8 overflow-hidden
    flex-col h-[130vh] px-10 py-10
    lg:flex-row lg:h-[70vh]
    md:h-screen
    sm:flex-col sm:h-[130vh] sm:px-30 sm:py-10 
    "
    >
      {/* Leva strana */}
      <motion.div
        className="flex flex-1 flex-col justify-center items-center gap-5 
        sm:items-start
        "
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span
          className="text-xl uppercase text-primary text-center
        lg:text-xl
        md:text-lg md:text-left
        "
        >
          Pronađite nas
        </span>
        <span
          className="text-3xl uppercase text-center
        lg:text-4xl
        md:text-3xl md:text-left
        "
        >
          Gde svaki detalj znači
        </span>
        <span
          className="text-lg text-center font-inter
        lg:text-xl
        md:text-lg md:text-left
        "
        >
          Naši ljubazni stručnjaci posvećeni su kreiranju stilova prilagođenih
          vašem jedinstvenom izgledu, u toploj i prijatnoj atmosferi koja vas
          čini kao kod kuće.
        </span>
        <motion.button
          className="bg-primary text-black text-xl uppercase px-6 py-4
          lg:px-3 lg:py-2 lg:text-lg
          "
          whileHover={{ scale: 1.05, backgroundColor: "#f97316" }} // hover efekt
        >
          Pošalji zahtev
        </motion.button>
      </motion.div>

      {/* Mapa */}
      <motion.div
        className="flex-2 h-full 
         w-full 
         sm:w-full
         "
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <MapWithOverlay />
      </motion.div>

      {/* Desna strana */}
      <motion.div
        className="flex-1  flex
        flex-col items-center 
        lg:flex-col lg:items-start 
        md:flex-row md:items-center md:justify-start md:gap-10
        sm:flex-col sm:items-center sm:gap-5
        "
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25 },
          },
        }}
        viewport={{ once: true }}
      >
        {/* Lokacija */}
        <motion.div
          className="flex justify-center items-center gap-5
           md:flex-1  md:gap-2 
          "
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
        >
          <div
            className="w-20 h-20 bg-[#BBB4A3] flex justify-center items-center rounded-xl
          lg:w-18 lg:h-18 
          md:w-16 md:h-16
          sm:w-15 sm:h-15
          "
          >
            <MdLocationOn className="w-12 h-12" />
          </div>
          <div className="flex flex-col gap-3">
            <span
              className="text-4xl uppercase 
             lg:text-2xl
              md:text-xl
              sm:text-xl
             "
            >
              Lokacija
            </span>
            <span
              className="text-xl
             lg:text-lg
              md:text-sm
              sm:text-sm
            "
            >
              (325) 641-8294
            </span>
          </div>
        </motion.div>

        <div className="w-full h-px my-2 bg-gray-400 md:hidden"></div>

        {/* Telefon */}
        <motion.div
          className="flex justify-center items-center gap-5
           md:flex-1  md:gap-2
          "
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
        >
          <div
            className="w-20 h-20 bg-[#BBB4A3] flex justify-center items-center rounded-xl
          lg:w-18 lg:h-18 
          md:w-16 md:h-16
          sm:w-15 sm:h-15

          "
          >
            <MdPhone className="w-12 h-12" />
          </div>
          <div className="flex flex-col gap-3">
            <span
              className="text-4xl uppercase 
             lg:text-2xl
              md:text-xl
               sm:text-xl
             "
            >
              Telefon
            </span>
            <span
              className="text-xl
             lg:text-lg
              md:text-sm
               sm:text-sm
            "
            >
              (325) 641-8294
            </span>
          </div>
        </motion.div>

        <div className="w-full h-px my-2 bg-gray-400 md:hidden"></div>

        {/* WhatsApp */}
        <motion.div
          className="flex justify-center items-center gap-5
           md:flex-1  md:gap-2
          "
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
        >
          <div
            className="w-20 h-20 bg-[#BBB4A3] flex justify-center items-center rounded-xl
          lg:w-18 lg:h-18 
          md:w-16 md:h-16
           sm:w-15 sm:h-15
          
          "
          >
            <MdWhatsapp className="w-12 h-12" />
          </div>
          <div className="flex flex-col gap-3">
            <span
              className="text-4xl uppercase 
             lg:text-2xl
              md:text-xl
               sm:text-xl
             "
            >
              WhatsApp
            </span>
            <span
              className="text-xl
             lg:text-lg
              md:text-sm
               sm:text-sm
            "
            >
              (325) 641-8294
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
