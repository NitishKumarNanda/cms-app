import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterMain from './FooterMain'
import NavbarMain from './navbar/NavbarMain'

export default function Home() {
  return (
    <div>
      <NavbarMain />
      <div style={{marginTop:50}}>
        <Outlet />
        <FooterMain />
      </div>
    </div>
  )
}
