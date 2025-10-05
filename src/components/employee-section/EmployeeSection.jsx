import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    name: "John Thompson",
    title: "Head Barber",
    img: "./images/barber1.png",
  },
  {
    id: 2,
    name: "Michael Adams",
    title: "Head Barber",
    img: "./images/barber2.png",
  },
  {
    id: 3,
    name: "Ryan Martinez",
    title: "Senior Barber",
    img: "./images/barber3.png",
  },
  {
    id: 4,
    name: "Alex Johnson",
    title: "Senior Barber",
    img: "./images/barber4.png",
  },
  {
    id: 5,
    name: "Steven Le",
    title: "Senior Barber",
    img: "./images/barber5.png",
  },
  {
    id: 6,
    name: "Anthony Rivera",
    title: "Senior Barber",
    img: "./images/barber6.png",
  },
];

export default function EmployeeSection() {
  return (
    <div className=" bg-white   flex relative overflow-hidden 
    xl:pt-30  xl:flex-row
    lg:flex-col lg:h-[120vh]
    sm:pt-10 sm:flex-col sm:gap-5 sm:h-[180vh]
    ">
      {/* Pozadinska slika */}
      <motion.img
        src="./images/img1.jpg"
        className="bottom-0 left-10 absolute lg:block sm:hidden"
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
        <span className="text-2xl uppercase text-primary 
        md:text-xl
        sm:text-lg
        ">Our Barbers</span>
        <span className="text-6xl uppercase
         md:text-4xl
         sm:text-3xl
        ">Meet Our Experts</span>
        <span className="text-2xl 
        
         md:text-xl
         sm:text-lg
         ">
          Our talented stylists blend tradition with innovation, using premium
          products and advanced techniques to deliver cutting-edge styles.
        </span>
      </motion.div>

      {/* Desna strana - kartice */}
      <motion.div
        className="flex-1 flex  gap-x-10 flex-wrap gap-y-0
        xl:w-[75%] 
        sm:w-full sm:justify-center sm:items-center 
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
