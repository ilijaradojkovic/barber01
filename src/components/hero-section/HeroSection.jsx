import React from 'react'

export default function HeroSection() {
  return (
    <div className="h-screen text-white flex    items-center pt-20 px-10 ">

      {/* Leva strana - tekst */}
      <div className="flex-1 flex  flex-col justify-center  items-center  ">
        <div className='flex flex-col gap-4   '>

          <span className="text-2xl text-primary uppercase tracking-wider ">
            Transform Your Look
          </span>

          <h1 className="text-8xl font-bold leading-tight uppercase">
            Experience the <br /> Art of the <br /> Perfect Cut
          </h1>

          <span className="opacity-50 mt-4 text-2xl border-l-4 text-start border-l-primary px-3 py-1 normal-case">
            Step in for a transformative experience that leaves you feeling <br />  confident and refreshed.
          </span>

          <button className="mt-6 bg-primary-light text-2xl text-black uppercase px-6 py-3 w-max cursor-pointer hover:bg-orange-500 transition-colors">
            Submit Request &rarr;
          </button>

          {/* Ikone i telefon */}
          <div className="flex justify-center flex-col gap-4 mt-20">
            <div className="flex gap-3">
              <div className="w-15 h-15 bg-gray-600 rounded-full flex items-center text-xl justify-center hover:bg-gray-500 cursor-pointer">F</div>
              <div className="w-15 h-15 bg-gray-600 rounded-full flex items-center text-xl justify-center hover:bg-gray-500 cursor-pointer">X</div>
              <div className="w-15 h-15 bg-gray-600 rounded-full flex items-center text-xl justify-center hover:bg-gray-500 cursor-pointer">I</div>
            </div>
            <span className="text-primary font-bold text-6xl">(325) 641-8294</span>
          </div>
        </div>
      </div>

      {/* Desna strana - slika */}
      <div className="flex-1 flex justify-start h-full overflow-y-clip">
        <img className='w-auto transform scale-108 mt-10' src="./hero01.png" alt="Barber" />
      </div>
    </div>
  )
}
