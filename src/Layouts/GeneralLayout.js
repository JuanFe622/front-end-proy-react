import React, {useState} from "react";
import { Layout, Button } from "antd";
import { MenuSider } from "../components/MenuComponents/MenuSider/MenuSider";
import { MenuTop } from "../components/MenuComponents/MenuTop/MenuTop";
import { FooterPage } from "../components/FooterPage/FooterPage";
import { GithubOutlined } from "@ant-design/icons";
import "./GeneralLayout.scss";

export const GeneralLayout = (props) => {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout 
        className="general-layout"
        >
          <Header className="general-layout-header" >
            <MenuTop 
              menuCollapsed={menuCollapsed} 
              setMenuCollapsed={setMenuCollapsed} 
              />
          </Header>
        <Content className="general-layout-content">
          {children}
        </Content>
        <Footer className="general-layout-footer">
          <FooterPage></FooterPage>
        </Footer>
      </Layout>
    </Layout>
  );
};
