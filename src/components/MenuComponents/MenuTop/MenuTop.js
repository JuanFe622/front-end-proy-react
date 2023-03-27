import React from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons/lib/icons'
import { Button } from 'antd'
import './MenuTop.scss'
import Logo from '../../../assets/img/png/Logo.png'
import { UserOutlined } from '@ant-design/icons'

export const MenuTop = (props) => {
  const {menuCollapsed, setMenuCollapsed} = props
  
  const userLogout = () => console.log('Logout')

  return (
    <div className='menu-top'>
      <div className='menu-top__left'>
        <img className='menu-top__left__logo' src={Logo} alt="Logo empresa" ></img>
        <Button 
          type='link' 
          onClick={() => setMenuCollapsed(!menuCollapsed)}
        >
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className='menu-top__right'>
        <Button type='link' onClick={userLogout}>
          <UserOutlined />
        </Button>
      </div>
    </div>
  )
}
