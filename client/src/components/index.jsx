import React from 'react'
import SideNavbar from './sideNavbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex gap-5'>
      <SideNavbar/>
      <Outlet/>
      </div>
  )
}

export default Layout