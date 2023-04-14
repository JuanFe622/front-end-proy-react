import React from 'react'
import { Button, Modal } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'

export const Logout = () => {
  const handleLogout = () => {
    Modal.confirm({
        title: 'Cerrar sesión',
        content: '¿Estás seguro de cerrar sesión?',
        onOk: () => {
            console.log('Cerrando sesión...')
        }
    })
}
return (
    <Button type='link' onClick={handleLogout} aria-label='Cerrar sesión'>
        <LogoutOutlined />
    </Button>
    )
}
