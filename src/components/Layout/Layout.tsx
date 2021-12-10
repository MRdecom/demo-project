import React from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'

type LayoutProp = {
    children: React.ReactNode,
    userName: string
}

const Layout = ({ children, userName = '' }: LayoutProp) => {
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

export default Layout
