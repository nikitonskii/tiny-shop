import React, { useState } from 'react'
import './InputStyles.scss'

interface IProps {
  label?: string
  type: string
  required?: string
}

const Input = (props: IProps) => {
  const [text, setText] = useState<string | null>(null) 

  return (
    <div className='InputContainer'>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        className='Input'
        type={props.type}
        id={props.label}
        required
        onChange={e => setText(e.target.value.trim())}
      />
    </div>
  )
}

export default Input