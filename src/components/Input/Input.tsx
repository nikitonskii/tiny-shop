import React from 'react';
import './InputStyles.scss';
import {InputProps} from './types';

const Input: React.FC<InputProps> = ({
  label,
  type, 
  isRequired, 
  isError, 
  onAction, 
  id,
  placeholder,
  errorText,
  onIconAction,
  leftIcon
}): JSX.Element => {
  
  return (
    <div className='input-container'>
      <label className='input-label' htmlFor={label}>{label}</label>
      <input
        className={isError ? 'input-error' : 'input'}
        type={type}
        id={id}
        required={!!isRequired}
        onChange={(e: any) => onAction(e)}
        placeholder={placeholder}
      />
      {leftIcon ? <span className='input-icon-container' onClick={(e: any) => onIconAction(e)}><i className={`${leftIcon} input-icon`} ></i></span> : null}
      {isError ? <p className='input-error-text'>{errorText}</p> : null}
    </div>
  )
}

export default Input