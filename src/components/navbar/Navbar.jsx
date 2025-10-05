import React from "react";

export default function Navbar() {
  return (
    <div className="w-full h-20 flex justify-center items-center
   
    ">
      <div className="flex-1 flex justify-start 
      md:ml-40
      sm:ml-0
      ">
        <img
          className="max-h-full object-contain h-20"
          src="./logo.png"
          alt="logo"
        />{" "}
      </div>

      <div className="flex-2 flex justify-center gap-8 items-center text-xl ">
        <span
          className="font-bold text-white hover:text-primary cursor-pointer transition-colors duration-300 
                xl:text-2xl 
                lg:text-lg
                
                "
        >
          ABOUT US
        </span>
        <span
          className="font-bold text-white hover:text-primary cursor-pointer transition-colors duration-300 
                xl:text-2xl 
                lg:text-lg
                
                "
        >
          OUR SERVICES
        </span>
        <span
          className="font-bold text-white hover:text-primary cursor-pointer transition-colors duration-300
                 xl:text-2xl 
                 lg:text-lg
              
                 "
        >
          CONTACT US
        </span>

        <button
          className="border border-white cursor-pointer text-white py-2 px-4  hover:bg-primary hover:text-black hover:border-black transition-colors duration-300 
                xl:text-2xl
                lg:text-lg
    

                "
        >
          REZERVISI
        </button>
      </div>
    </div>
  );
}
