import React from "react";
import './ButtonStyles.scss'

interface IProps {
  title: string
  onAction?: React.MouseEventHandler
  buttonType?: 'submit' | 'reset' | 'button'
}

const Button = (props: IProps) => {

  return (
    <button 
      className='Button'
      type={props.buttonType}
      onClick={props.onAction}
    >
      {props.title}
    </button>
  )
}

export default Button