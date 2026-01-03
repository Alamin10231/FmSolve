import React from 'react'
// import { Topbar } from './Topbar'
import { Outlet } from 'react-router'
import { Footer } from './Footer'
import Topbar from './Topbar'

export const LandingLayout = () => {
  return (
    <div>
        <Topbar></Topbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
