import {
  HomeOutlined,
  AppstoreOutlined,
  BankOutlined,
  TeamOutlined,
} from "@ant-design/icons/lib/icons";
import React from "react";
import { Menu, Layout } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import './MenuSider.scss'

export const MenuSider = (props) => {
  const { Sider } = Layout;
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { key: "/users", icon: <HomeOutlined />, label: <span>Dashboard</span> },
    {
      key: "/products",
      icon: <TeamOutlined />,
      label: <span>Usuarios</span>,
    },
    {
      key: "/services",
      icon: <AppstoreOutlined />,
      label: <span>Productos</span>,
    },
    {
      key: "/config",
      icon: <AppstoreOutlined />,
      label: <span>Servicios</span>,
    },
  ];

  const navigateTo = (e) => {
    const path = e.key;
    console.log("path: ", path);
    navigate(path);
  };

  const itemRender = (item, index) => {
    const { icon, label } = item;
    const isSelected = location.pathname === item.key;
    return (
      <Menu.Item
        key={item.key}
        icon={icon}
        className={
          isSelected ? "ant-menu-item ant-menu-item-selected" : "ant-menu-item"
        }
      >
        {label}
      </Menu.Item>
    );
  };

  return (
    <Sider  className="menu-sider" collapsed={props.menuCollapsed}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        items={menuItems}
        onClick={navigateTo}
      >
        {menuItems.map((item) => itemRender(item))}
      </Menu>
    </Sider>
  );
};
