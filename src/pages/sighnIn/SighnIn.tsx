import React, { SyntheticEvent, useState} from "react";

import './SighnInStyles.scss';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Fields } from "./types";
import { regExEmail } from '../../utils/validationPatterns'

const SighnIn = () => {
  const [success, setSuccess] = useState<Boolean>(false)
  const [visiblePassword, setVisiblePassword] = useState<Boolean>(false)
  const [formFields, setFormFields] = useState<Fields>({
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    repeatedPassword: '',
  })

  const [isFieldsValid, setIsFieldsValid] = useState({
    isFirstNameValid: false,
    isEmailValid: false,
    isPasswordValid: false,
    isRepeatedPasswordValid: false,
  })

  const getFieldContent = (e: any) => {
    setFormFields({
      ...formFields,
      [e.target.id]: e.target.value,
    })
  }

  const showPassword = (e: any) => {
    e.preventDefault()
    setVisiblePassword(!visiblePassword)
  }

  const checkFields = () => {
    const state = {
      isFirstNameValid: false,
      isEmailValid: false,
      isPasswordValid: false,
      isRepeatedPasswordValid: false,
    }

    if(formFields.firstName.length) state.isFirstNameValid = false
    else state.isFirstNameValid = true

    if(formFields.email.length && regExEmail.test(formFields.email)) state.isEmailValid = false
    else state.isEmailValid = true

    if(formFields.password.length) state.isPasswordValid = false
    else state.isPasswordValid = true

    if(formFields.repeatedPassword.length) state.isRepeatedPasswordValid = false 
    else state.isRepeatedPasswordValid = true
     
    setIsFieldsValid(state)
    return [...Object.values(state)].includes(true)
  }
 
  const makeFakeRequest = (e: SyntheticEvent) => {
    e.preventDefault()
    const checkResult = checkFields()
    if(!checkResult) {
      setTimeout(() => setSuccess(true), 1000)
    }
  }

  const closePopup = () => setSuccess(false)
  
  const config = [
    {
      id: 'firstName',
      type: 'text',
      label: 'First name *',
      error: isFieldsValid.isFirstNameValid,
      onAction: getFieldContent,
      required: true,
      placeholder: 'your name',
      errorText: 'this field must be filled'
    },
    {
      id: 'secondName',
      type: 'text',
      label: 'Second name',
      //error: isFieldsValid.isFirstNameValid,
      onAction: getFieldContent,
      required: false,
      placeholder: 'your second name',
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email *',
      error: isFieldsValid.isEmailValid,
      onAction: getFieldContent,
      required: true,
      placeholder: 'email',
      errorText: 'this field must be filled'
    },
    {
      id: 'password',
      type: visiblePassword ? 'text' : 'password',
      label: 'Password *',
      error: isFieldsValid.isPasswordValid,
      onAction: getFieldContent,
      required: true,
      placeholder: 'password',
      errorText: 'this field must be filled',
      onIconAction: showPassword,
      leftIcon: visiblePassword ? 'fas fa-eye' : 'fas fa-eye-slash'
    },
    {
      id: 'repeatedPassword',
      type: visiblePassword ? 'text' : 'password',
      label: 'Repeat Password *',
      error: isFieldsValid.isRepeatedPasswordValid,
      onAction: getFieldContent,
      required: true,
      placeholder: 'repeat password',
      errorText: 'this field must be filled',
      onIconAction: showPassword
    },
  ]

  return (
    <div className='SighnInContainer'>
      <form className='SighInForm'>
        {config.map((item: any) => 
          <Input 
            key={item.id}
            id={item.id}
            type={item.type}
            label={item.label}
            error={item.error}
            onAction={item.onAction}
            required={item.required}
            placeholder={item.placeholder}
            errorText={item.errorText}
            onIconAction={item.onIconAction}
            leftIcon={item.leftIcon}
          />
        )}
          <Button 
            title='Send'
            onAction={makeFakeRequest}
            buttonType='submit'
          />
      </form>
      {success
        ? <div className='SighnInPopup'>
            <h3>Congrat Champ !! you did it</h3>
            <Button 
              buttonType='button'
              onAction={closePopup} 
              title='close me'
            />
          </div> 
        : null
      }
    </div>
  )
}

export default SighnIn