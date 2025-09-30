import React from "react";
import MapWithOverlay from "./Map";
import { MdLocationOn, MdPhone, MdOutlineWhatsapp } from "react-icons/md";
import { motion } from "framer-motion";

export default function SectionLocation() {
  return (
    <div className="h-[70vh] bg-primary-100 flex justify-center items-center px-30 py-10 gap-8 overflow-hidden">
      {/* Leva strana */}
      <motion.div
        className="flex flex-1 flex-col justify-center items-start gap-5"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="text-2xl uppercase text-primary">Find Us</span>
        <span className="text-6xl uppercase">Where Every Detail Matters</span>
        <span className="text-2xl">
          Our friendly experts are committed to delivering tailored styles that
          match your unique vibe, all within a warm and inviting atmosphere that
          makes you feel at home.
        </span>
        <motion.button
          className="bg-primary text-black text-xl uppercase px-6 py-4"
          whileHover={{ scale: 1.05, backgroundColor: "#f97316" }} // hover efekt
        >
          Submit Request
        </motion.button>
      </motion.div>

      {/* Mapa */}
      <motion.div
        className="flex-1 h-full"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <MapWithOverlay />
      </motion.div>

      {/* Desna strana */}
      <motion.div
        className="flex-1 gap-3 flex flex-col items-start"
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
          className="flex justify-center items-center gap-5"
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-20 h-20 bg-[#BBB4A3] flex justify-center items-center rounded-xl">
            <MdLocationOn className="w-12 h-12" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-4xl uppercase">Location</span>
            <span className="text-xl">
              1234 Broadway Avenue, Suite 101 New York, NY 10027
            </span>
          </div>
        </motion.div>

        <div className="w-full h-px my-2 bg-gray-400"></div>

        {/* Telefon */}
        <motion.div
          className="flex justify-center items-center gap-5"
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-20 h-20 bg-[#BBB4A3] flex justify-center items-center rounded-xl">
            <MdPhone className="w-12 h-12" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-4xl uppercase">Phone Number</span>
            <span className="text-xl">(325) 641-8294</span>
          </div>
        </motion.div>

        <div className="w-full h-px my-2 bg-gray-400"></div>

        {/* WhatsApp */}
        <motion.div
          className="flex justify-center items-center gap-5"
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-20 h-20 bg-[#BBB4A3] flex justify-center items-center rounded-xl">
            <MdOutlineWhatsapp className="w-12 h-12" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-4xl uppercase">Whatsapp Support</span>
            <span className="text-xl">(325) 641-8294</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
