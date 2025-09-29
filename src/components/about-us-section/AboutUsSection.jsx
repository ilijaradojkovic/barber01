

import React from "react";
import Carousel from "./CauroselCustom";



export default function AboutUsSection() {

    return (
        <div className="h-screen flex bg-primary-100 pt-30 ps-10">
            {/* Leva strana */}
            <div className="w-1/3 flex flex-col gap-6 p-8 ">
                <span className="text-xl font-bold text-primary uppercase">Our Story</span>
                <span className="uppercase text-6xl font-bold uppercase">Discover Works of Our Barbers</span>
                <span className="font-normal text-xl">
                    Our talented stylists blend tradition with innovation, using <br />
                    premium products and advanced techniques to deliver cutting-edge styles.
                </span>
            </div>

            {/* Desna strana */}
              <div className="w-2/3 mx-auto h-full py-10 "> {/* centriran container */}

                <Carousel />
           </div>


        </div>
    );
}

