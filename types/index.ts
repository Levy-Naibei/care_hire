import { MouseEventHandler } from "react";

export interface ButtonComponentProps {
    btnType?: "button" | "submit";
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}
export interface FilterComponentProps {
    title: string;
    options: OptionsProps[];
}
export interface OptionsProps {
    title: string;
    value: string;
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
export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}
