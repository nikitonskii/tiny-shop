import React from "react";
import './ButtonStyles.scss'
import { IProps } from "./types";

const Button = (props: IProps) => {

  const {buttonType, onAction, title} = props

  return (
    <button 
      className='Button'
      type={buttonType}
      onClick={onAction}
    >
      {title}
    </button>
  )
}

export default Button