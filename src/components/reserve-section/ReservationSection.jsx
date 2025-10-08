import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div id="reserve" className="flex flex-col justify-center items-center h-[95vh] bg-background
    md:flex-row
    sm:flex-col sm:py-5 
    ">
      {/* Slika sa overlay-em */}
      <motion.div 
        className="overflow-hidden rounded-xl relative"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src="./images/img2.jpg" />
        <div
          className="rounded-2xl"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: 0.5,
            pointerEvents: "none",
            zIndex: 1000,
          }}
        />
      </motion.div>

      {/* Forma */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-neutral-100 p-8   shadow-lg w-full max-w-md
       md:rounded-bl-none md:rounded-tl-none
       sm:rounded-bl-xl sm:rounded-tl-xl sm:rounded-br-xl sm:rounded-tr-xl
        "
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Unesite podatke</h2>

        {/* Ime */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="firstName">
            Ime
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Vaše ime"
            required
          />
        </div>

        {/* Prezime */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="lastName">
            Prezime
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Vaše prezime"
            required
          />
        </div>

        {/* Datum */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="date">
            Datum
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Vreme */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1" htmlFor="time">
            Vreme
          </label>
          <input
            type="time"
            name="time"
            id="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary transition-colors cursor-pointer "
        >
          Pošalji
        </motion.button>
      </motion.form>
    </div>
  );
}
