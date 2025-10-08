import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    name: "Jovan Kivic",
    title: "Glavni Frizer",
    img: "./images/barber1.png",
  },
  {
    id: 2,
    name: "Milan Aleksic",
    title: "Senior Frizer",
    img: "./images/barber2.png",
  },
  {
    id: 3,
    name: "Aleksa Jankovic",
    title: "Senior Frizer",
    img: "./images/barber4.png",
  },
  {
    id: 4,
    name: "Stefan Miljkovic",
    title: "Senior Frizer",
    img: "./images/barber5.png",
  },

];

export default function EmployeeSection() {
  return (
    <div
      className=" bg-white  pt-5  flex relative overflow-hidden  
    flex-col
    xl:pt-30  xl:flex-row
    lg:flex-col lg:h-[120vh]
    sm:pt-10 sm:flex-col sm:gap-5 sm:h-[180vh]
    "
    >
      {/* Pozadinska slika */}
      <motion.img
        src="./images/img1.jpg"
        className="bottom-0 left-10 absolute xl:block sm:hidden hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      {/* Leva strana - tekst */}
      <motion.div
        className="flex flex-col gap-3 pl-15 
      
       lg:w-full lg:justify-center lg:items-center
       xl:justify-start xl:w-[25%]  xl:items-start
       
       "
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span
          className="text-xl uppercase text-primary 
        md:text-xl
        sm:text-lg
        "
        >
          Naši berberi
        </span>
        <span
          className="text-3xl uppercase
         md:text-4xl
         sm:text-3xl
        "
        >
          Upoznajte naše stručnjake
        </span>
        <span
          className="text-lg  font-inter
        
         md:text-xl
         sm:text-lg
         "
        >
          Naši talentovani stilisti spajaju tradiciju i inovaciju, koristeći
          vrhunske proizvode i napredne tehnike kako bi kreirali moderne i
          precizne stilove.
        </span>
      </motion.div>

      {/* Desna strana - kartice */}
      <motion.div
        className="flex-1 flex  gap-x-10 flex-wrap gap-y-0 w-full items-center justify-center mt-5
        xl:w-[75%] 
        sm:w-full sm:justify-center sm:items-center  mt-0
        "
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
        {data.map((ele) => (
          <motion.div
            key={ele.id}
            className="flex justify-center items-center flex-col cursor-pointer"
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 40 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-[95%] h-[350px] rounded-2xl shadow-lg">
              <img
                src={ele.img}
                className="h-full w-full rounded-2xl object-cover"
                alt={ele.name}
              />
            </div>
            <div className="flex w-[95%] justify-center items-center flex-col mt-3">
              <span className="text-2xl uppercase">{ele.name}</span>
              <div className="w-24 h-px my-2 bg-gray-400"></div>
              <span className="text-lg opacity-50">{ele.title}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
