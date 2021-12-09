import React, {useState} from 'react';
import {Header} from "./Header";
import {Button, TextInput} from "../../components";

const LoginPage = () =>{
    const [nameInput,setNameInput] = useState('');

    const nameOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value);
    }

    const signInOnClickHandler = () => {

    }

    return (
        <div className='login-page'>
            <div className='form-block'>
                <Header/>
                <TextInput label='Username' onChange={nameOnChangeHandler}/>
                <TextInput label='Password' type='password' onChange={nameOnChangeHandler}/>
                <Button buttonText='Sign in' onClick={signInOnClickHandler}
                />
            </div>
        </div>
    )
}

export default LoginPage;