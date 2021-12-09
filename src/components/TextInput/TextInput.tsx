import React from 'react';

type TextInputProp = {
    placeholder?: string,
    onClick?: (e: any)=>void,
    onChange?: (e: any)=>void,
    type?: string,
    className?: string,
    labelClassName?: string,
    containerClassName?: string,
    label: string,
}

const TextInput = ({placeholder,
                       onClick,
                       onChange,
                       type='input',
                       className='',
                       labelClassName='',
                       containerClassName='',
                       label}:TextInputProp) =>{
    return (
        <div className={`text-input-container ${containerClassName}`}>
            <p className={`label ${labelClassName}`}>{label}</p>
            <input className={`text-input ${className}`}
                   onClick={onClick}
                   onChange={onChange}
                   type={type}
                   placeholder={placeholder}
            />
        </div>

    )
}

export default TextInput;