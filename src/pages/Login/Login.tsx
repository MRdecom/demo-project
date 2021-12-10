import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { Button, TextInput } from '../../components'
import { login } from '../../dummies/login'
import { accessToken } from '../../constants/constants'
import { useHistory } from 'react-router-dom'
import { pageUrls } from '../../constants/pageUrls'

const LoginPage = () => {
  const history = useHistory()
  const [nameInput, setNameInput] = useState('')
  const [passInput, setPassInput] = useState('')

  useEffect(() => {
    const token = localStorage.getItem(accessToken)
    if (token) {
      history.push(pageUrls.list)
    }
  }, [])

  const nameOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }

  const passwordOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassInput(e.target.value)
  }

  const signInOnClickHandler = () => {
    const resp = login(nameInput, passInput)
    if (resp?.token) {
      localStorage.setItem(accessToken, resp.token)
      history.push(pageUrls.list)
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
