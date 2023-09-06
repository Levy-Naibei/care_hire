"use client"

import Image from 'next/image'
import ButtonComponent from './ButtonComponent'
import car_image from './../public/hero.png'

const Hero = () => {

  const handleScroll = () => {

  }

  return (
    <div className="hero">
      <div className="flex-1 padding-x pt-36">
        <h1 className="hero__title">
          Find, book or rent a car &#8212; quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking process
        </p>
        <ButtonComponent
          btnType="button"
          title="Explore cars"
          containerStyles="bg-primary-blue mt-10 mb-5 rounded-full text-white"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={car_image} alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero;