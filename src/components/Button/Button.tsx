import React from 'react';
import './ButtonStyles.scss';
import { IButtonProps } from '../Button/types';

const Button: React.FC<IButtonProps> = ({
  buttonType,
  onAction, 
  title
}): JSX.Element => {

  return (
    <button 
      className='button'
      type={buttonType}
      onClick={onAction}
    >
      {title}
    </button>
  )
}

export default Button