import React from "react";
import { Layout } from "antd";
import { MenuSider } from "../components/MenuComponents/MenuSider/MenuSider";
import { MenuTop } from "../components/MenuComponents/MenuTop/MenuTop";
export const GeneralLayout = (props) => {
  const { children } = props;
  return (
    <Layout>
      <MenuSider></MenuSider>
      <MenuTop></MenuTop>
      <h2>Menú</h2>
      <div>Contenido</div>
      <h2>Footer</h2>
      {children}
    </Layout>
  );
};
