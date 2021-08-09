import React, {SyntheticEvent, useState} from "react";

import './SighnInStyles.scss';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const SighnIn = () => {

  const [firstName, setFirstName] = useState<string>('')
  const [secondName, setSecondName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatedPassword, setRepeatedPassword] = useState<string>('')
  const [success, setSuccess] = useState<Boolean>(false)

  const [isFirstNameValid, setIsFirstNameValid] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [isRepeatedPasswordValid, setIsRepeatedPasswordValid] = useState(false)

  const checkFields = () => {
    if(!firstName.length) setIsFirstNameValid(true)
    else setIsFirstNameValid(false)

    if(!email.length) setIsEmailValid(true)
    else setIsEmailValid(false)

    if(!password.length) setIsPasswordValid(true)
    else setIsPasswordValid(false)

    if(!repeatedPassword.length) setIsRepeatedPasswordValid(true)
    else setIsRepeatedPasswordValid(false)
  }
 
  const makeFakeRequest = (e: SyntheticEvent) => {
    e.preventDefault()
    checkFields()
    console.log(isFirstNameValid,isEmailValid,isPasswordValid,isRepeatedPasswordValid)
    if(!isFirstNameValid && !isEmailValid && !isPasswordValid && !isRepeatedPasswordValid) {
      setTimeout(() => setSuccess(true), 5000)
    }
  }

  const closePopup = () => setSuccess(false)

  return (
    <div className='SighnInContainer'>
      <form className='SighInForm' >
      <label htmlFor='firstname'>First Name</label>
      <input
        className={isFirstNameValid ? 'SignInInputWrong' : 'SighnInInput'}
        type='text'
        id='firstname'
        required
        onChange={e => setFirstName(e.target.value.trim())}
      />
      <label htmlFor='secondname'>Second Name</label>
      <input
        className='SighnInInput'
        type='text'
        id='secondname'
        onChange={e => setSecondName(e.target.value.trim())}
      />
      <label htmlFor='email'>Email</label>
      <input
        className={isEmailValid ? 'SignInInputWrong' : 'SighnInInput'}
        type='email'
        id='email'
        onChange={e => setEmail(e.target.value.trim())}
      />
      <label htmlFor='password'>Password</label>
      <input
        className={isPasswordValid ? 'SignInInputWrong' : 'SighnInInput'}
        type='password'
        id='passwoed'
        onChange={e => setPassword(e.target.value.trim())}
      />
      <label htmlFor='password-repeat'>Password one more time</label>
      <input
        className={isRepeatedPasswordValid ? 'SignInInputWrong' : 'SighnInInput'}
        type='password'
        id='passwoed-repeat'
        onChange={e => setRepeatedPassword(e.target.value.trim())}
      />
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