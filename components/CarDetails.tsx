// import { useState } from 'react'
import { CarProps } from '@/types';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDetails = ({ car, isOpen, closeModal }: CarDetailsProps) => {
    return (
        <div>
            Car Details
        </div>
    )
}

export default CarDetails;
