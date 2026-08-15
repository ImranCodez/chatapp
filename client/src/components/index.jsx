import React from 'react'
import { Outlet } from 'react-router'
import SideNavbar from './sideNavbar'

const Layout = () => {
  return (
    <div className='flex gap-5'>
      <SideNavbar/>
      <Outlet/>
      </div>
  )
}

export default Layout