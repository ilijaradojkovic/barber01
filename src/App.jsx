import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero-section/HeroSection'
import AboutUsSection from './components/about-us-section/AboutUsSection'
import PricesSection from './components/prices-section/PricesSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <HeroSection />
        <AboutUsSection />
        <PricesSection/>


    </>
  )
}

export default App
