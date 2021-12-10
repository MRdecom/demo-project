import React, { useMemo, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { pageUrls } from '../../../constants/pageUrls'
import { accessToken } from '../../../constants/constants'
const SideBar = () => {
  const history = useHistory()
  const location = useLocation()
  const [selectedLink, setSelectedLink] = useState(0)

  useMemo(() => {
    if (location.pathname === pageUrls.home) setSelectedLink(0)
    if (location.pathname === pageUrls.list) setSelectedLink(1)
  }, [location])

  const signOutUser = async () => {
    history.push(pageUrls.login)
    localStorage.setItem(accessToken, '')
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
