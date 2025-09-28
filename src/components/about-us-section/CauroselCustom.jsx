import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
const data = [
  {
    id: 1,
    image: './caurosel/1.jpg'
  },
  {
    id: 2,
    image: './caurosel/2.png'
  },
  {
    id: 3,
    image: './caurosel/3.jpg'
  },
  {
    id: 4,
    image: './caurosel/4.jpg'
  },
  {
    id: 5,
    image: './caurosel/5.png'
  },
]

export default function Carousel() {
  return (
    <Swiper
      className="h-full px-4 py-6" // 👈 ovde podešavaš visinu + padding
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      {data.map(
        ele =>
          <SwiperSlide key={ele.id}>
            <div className="flex h-full items-center justify-center bg-blue-500 text-white rounded-lg shadow-md  ">
              <img src={ele.image} className='h-full object-cover rounded-lg' />
            </div>
          </SwiperSlide>

      )}


    </Swiper>
  );
}

