import React, { SyntheticEvent, useState, useLayoutEffect } from 'react';

import './SignInStyles.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { config } from './config';
import { Fields, ValidationFields, ConfigItem } from './types';

const SignIn: React.FC = (): JSX.Element => {
  const [success, setSuccess] = useState<Boolean>(false)
  const [formFields, setFormFields] = useState<Fields>({})
  const [isFieldsValid, setIsFieldsValid] = useState<ValidationFields>({})
  const [isShowPassword, setShowPassword] = useState<Boolean>(true)

  useLayoutEffect(() => {
    let fields: Fields = {}
    let validationVars: ValidationFields = {}
    config.forEach((field) => {
      const {id} = field
      if(field.isRequired) {
        fields = {
          ...fields,
          [id]: '',
        }
        validationVars = {
          ...validationVars,
          [id]: false,
        }
      }
      else {
        fields = {
          ...fields,
          [id]: '',
        }
      }
    })
    setFormFields(fields)
    setIsFieldsValid(validationVars)
  }, [])

  const onChangeFieldsValue = (e: any) => {
    const {id, value} = e.target
    setFormFields({
      ...formFields,
      [id]: value,
    })
  }

  const showPassword = () => {
    setShowPassword(!isShowPassword)
  }

  const checkFields = (config: ConfigItem[]) => {
    let state: ValidationFields = {}
    config.forEach((field: ConfigItem) => {
      if(field.isRequired) {
        state = {
          ...state,
          [field.id]: false,
        }
      }
    })
    const fields = [...Object.keys(state)]
    fields.forEach((item) => {
      if(formFields[item].length) state[item] = false
      else state[item] = true
    })
    
    setIsFieldsValid(state)
    return [...Object.values(state)].includes(true)
  }
 
  const makeFakeRequest = (e: SyntheticEvent) => {
    e.preventDefault()
    const checkResult = checkFields(config)
    if(!checkResult) {
      setTimeout(() => setSuccess(true), 1000)
    }
  }

  const closePopup = () => setSuccess(false)
  
  return (
    <div className='sign-in-container'>
      <form className='sign-in-form' onSubmit={() => {}}>
        {config.map((item: ConfigItem) => 
          <Input 
            key={item.id}
            id={item.id}
            type={isShowPassword ? item.optionalType : item.type}
            label={item.label}
            isError={isFieldsValid[item.id]}
            onAction={onChangeFieldsValue}
            isRequired={item.isRequired}
            placeholder={item.placeholder}
            errorText={item.errorText}
            onIconAction={item.onIconAction ? showPassword : () => {}}
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
        ? <div className='sign-in-popup'>
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

export default SignIn