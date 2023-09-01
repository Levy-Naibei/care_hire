import { MouseEventHandler } from "react";

export interface ButtonComponentProps {
    // btnType: string,
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
}