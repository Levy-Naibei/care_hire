"use client";
import Image from 'next/image';
import { ButtonComponentProps } from '@/types';

const ButtonComponent = (
  {
    title,
    containerStyles,
    handleClick,
    btnType,
    textStyles,
    rightIcon,
  }: ButtonComponentProps) => {
  return (
    <button
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {
        rightIcon && (
          <div className="relative h-6 w-6">
            <Image
              src={rightIcon}
              alt="right icon"
              fill
              className="object-contain"
            />
          </div>
        )
      }
    </button>
  )
}

export default ButtonComponent;
