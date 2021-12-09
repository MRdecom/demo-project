import React, {useEffect, useState} from 'react';
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";

type LayoutProp = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProp) =>{
    const [userName,setUserName] = useState('');

    useEffect(()=>{

    },[])

    return (
        <div className='layout'>
            <Header pageTitle='Demo Project' userName={userName} userRole='admin'/>
            <div className='layout-items'>
                <SideBar/>
                <div className='content-block'>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Layout;