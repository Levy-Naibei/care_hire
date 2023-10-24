"use client"
import { useState } from 'react'
import Image from 'next/image';

import { CarProps } from '@/types';
import ButtonComponent from './ButtonComponent';
import { calculateCarRent } from '@/utils';
import { CarDetails } from '.';
interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, drive, make, model, transmission, year } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{make} {model}</h2>
      </div>
      <p className="flex mt-6 font-extrabold text-[32px]">
        <span className="self-start text-[14px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] font-medium">
          /day
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car model"
          priority fill
          className="object-contain"
        />
      </div>
      <div className="relative w-full flex mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src="/steering-wheel.svg" alt="steering wheel" width={20} height={20} />
            <p className="text-[14px]">
              {transmission == "a" ? "Automatic" : "Manual"}
            </p>
          </div>
        </div>
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            <p className="text-[14px]">
              {drive.toUpperCase()}
            </p>
          </div>
        </div>
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src="/gas.svg" alt="gas" width={20} height={20} />
            <p className="text-[14px]">
              {city_mpg} MPG
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <ButtonComponent
            title="View More"
            containerStyles="w-full py-4 rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <div>
        <CarDetails
          car={car}
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
        />
      </div>
    </div>
  )
}

export default CarCard;
