import React, { useState } from 'react'
import { Header } from './Header'
import { Button, TextInput } from '../../components'
import { login } from '../../dummies/login'

const LoginPage = () => {
  const [nameInput, setNameInput] = useState('')
  const [passInput, setPassInput] = useState('')

  const nameOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }

  const passwordOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassInput(e.target.value)
  }

  const signInOnClickHandler = () => {
    const resp = login(nameInput, passInput)
    if (resp?.token) {
      // TODO: token varsa storage a kaydet.
      // TODO:
    } else alert(resp.error)
  }

  return (
        <div className='login-page'>
            <div className='form-block'>
                <Header/>
                <TextInput label='Username' onChange={nameOnChangeHandler}/>
                <TextInput label='Password' type='password' onChange={passwordOnChangeHandler}/>
                <Button buttonText='Sign in' onClick={signInOnClickHandler}
                />
            </div>
        </div>
  )
}

export default LoginPage
