import React from 'react'
import './InputStyles.scss'
import {IProps} from './types'

const Input = (props: IProps) => {
  const {
    label,
    type, 
    required, 
    error, 
    onAction, 
    id,
    placeholder,
    errorText
  } = props

  return (
    <div className='InputContainer'>
      <label className='InputLabel' htmlFor={label}>{label}</label>
      <input
        className={error ? 'InputError' : 'Input'}
        type={type}
        id={id}
        required={!!required}
        onChange={(e: any) => onAction(e)}
        placeholder={placeholder}
      />
      {error ? <p className='InputErrorText'>{errorText}</p> : null}
    </div>
  )
}

export default Input