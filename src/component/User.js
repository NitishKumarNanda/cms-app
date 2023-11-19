import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarMain from './navbar/NavbarMain'

export default function User() {
  return (
    <div>
      <NavbarMain />
      <div style={{ marginTop: 50 }}>
        <Outlet />
      </div>
    </div>
  )
}
