import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { NavLink } from 'react-router-dom'
import React from 'react'
import './styles/navbar.scss'

export const NavbarView = () => {

  return (
    <nav className='navbar-primary-nav'>
    <NavLink to='/'>
      <u>HOME</u>
    </NavLink>
    <NavLink to='/external' >
      <u>USERS LAZY LOAD</u>
    </NavLink>
    <br/>
  </nav>
  )
}
