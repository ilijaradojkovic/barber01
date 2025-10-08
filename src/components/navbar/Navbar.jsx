import React from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="w-full flex-col   flex justify-center items-center
    sm:flex-row sm:h-20
    "
    >
      <div
        className="flex-1 flex justify-start 
      md:ml-40
      sm:ml-0 
      "
      >
        <img
          className="max-h-full object-contain h-20"
          src="./logo.png"
          alt="logo"
        />{" "}
      </div>

      <div
        className="flex-2 flex justify-center gap-8 items-center text-xl flex-col
        sm:flex-row
      "
      >
        <span
          className="font-bold text-white hover:text-primary cursor-pointer transition-colors duration-300 
                xl:text-2xl 
                lg:text-lg
                
                "
        >
               <a href="#about" > O NAMA </a>
        </span>

        <span
          className="font-bold text-white hover:text-primary cursor-pointer transition-colors duration-300
                 xl:text-2xl 
                 lg:text-lg
              
                 "
        >
        <a href="#prices" >NAŠE USLUGE</a>  
        </span>
          <span
          className="font-bold text-white hover:text-primary cursor-pointer transition-colors duration-300
                 xl:text-2xl 
                 lg:text-lg
              
                 "
        >
        <a href="#contact" >  KONTAKT</a>
        </span>
        <button
       
          className="border border-white cursor-pointer text-white py-2 px-4  hover:bg-primary hover:text-black hover:border-black transition-colors duration-300 
                xl:text-2xl
                lg:text-lg
    

                "
        >
         <a href="#reserve" > REZERVIŠI </a>
        </button>
       
      </div>
    </div>
  );
}
