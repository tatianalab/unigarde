import React from 'react'
import {menuData} from '../../data/MenuData'
import {Button} from '../Button'
import logo from '../../images/logo.png'
import {Nav, LogoWrappper, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn } from './NavElements'



const Navbar = ({toggle}) => {
  return (
    <Nav>
    <LogoWrappper to="/">
    <Logo src={logo} />
    </LogoWrappper>

    <MenuBars onClick={toggle} />
    <NavMenu>
    {menuData.map((item,index) => {
      return (
        <NavMenuLinks to={item.link} key={index}>
        {item.title}
        </NavMenuLinks>
        )
    })}
    </NavMenu>
      <NavBtn>
      <Button to='/contact' primary='true'>Contactez-Nous</Button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar
