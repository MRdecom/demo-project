import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { pageUrls } from '../../../constants/pageUrls'
const SideBar = () => {
  const history = useHistory()
  const [selectedLink, setSelectedLink] = useState(0)
  const signOutUser = async () => {
    history.push('/Login')
  }
  return (
        <div className='side-bar'>
            <Link onClick={() => setSelectedLink(0)} className={`side-bar-link ${selectedLink === 0 ? 'selected' : ''}`} to={pageUrls.home}>Home</Link>
            <Link onClick={() => setSelectedLink(1)} className={`side-bar-link ${selectedLink === 1 ? 'selected' : ''}`} to={pageUrls.list}>Product List</Link>
            <span className='side-bar-link' onClick={signOutUser}>Sign Out</span>
        </div>
  )
}

export default SideBar
