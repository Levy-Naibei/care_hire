import { MouseEventHandler } from "react";

export interface ButtonComponentProps {
    btnType?: "button" | "submit";
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface FilterProps {
    title: string
}

export interface SearchMakeProps {
    make: string;
    setMake: (make: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}
