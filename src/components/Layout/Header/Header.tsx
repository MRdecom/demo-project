import React from 'react';

type HeaderProp = {
    className?:string,
    pageTitle:string,
    userName:string,
    userRole?:string
}

const Header = ({className='',pageTitle ,userName ,userRole}:HeaderProp) =>{
    return (
        <div className='header'>
            <p className={`page-title ${className}`}>{pageTitle}</p>
            <div className='user-info-block'>
                <p className='user-name'>{userName}</p>
                <p className='user-role'>{userRole}</p>
            </div>
        </div>
    )
}

export default Header;