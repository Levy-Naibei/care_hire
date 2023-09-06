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