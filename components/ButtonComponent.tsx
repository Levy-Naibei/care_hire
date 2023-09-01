"use client";

import { ButtonComponentProps } from '@/types';
import React from 'react'

const ButtonComponent = (
  {
    title,
    containerStyles,
    handleClick
  }: ButtonComponentProps) => {
  return (
    <button
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      onClick={() => handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default ButtonComponent;
