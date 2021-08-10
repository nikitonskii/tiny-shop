import React, { useState } from 'react'
import './InputStyles.scss'

interface IProps {
  label?: string
  type: string
  required?: Boolean
  error?: string
}

const Input = (props: IProps) => {
  const [text, setText] = useState<string | null>(null) 
  const {label, type, required, error} = props

  return (
    <div className='InputContainer'>
      <div className='InputLabelWrapper'>
        <label htmlFor={label}>{label}</label>
      </div>
      <input
        className='Input'
        type={type}
        id={label}
        required={!!required}
        onChange={e => setText(e.target.value.trim())}
      />
      {error ? <p>Something went wrong</p> : null}
    </div>
  )
}

export default Input