import React from 'react'
import { CarProps } from '@/types';
import ButtonComponent from './ButtonComponent';

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, combination_mpg, cylinders, displacement, drive,
        fuel_type, highway_mpg, make, model, transmission, year } = car;
    return (
        <div>{drive}</div>
    )
}

export default CarCard;
