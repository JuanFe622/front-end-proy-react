import React, {useState} from "react";
import { Layout, Button } from "antd";
import { MenuSider } from "../components/MenuComponents/MenuSider/MenuSider";
import { MenuTop } from "../components/MenuComponents/MenuTop/MenuTop";
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
        className="layout-general"
        style={{marginLeft: menuCollapsed ? "80px" : "200px"}}
        >
        <Header
          className="layout-general__header"
          >
          <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
        </Header>
        <Content style={{margin: "24px 16px 0"}}>
          {children}
        </Content>
        <Footer>
          <Button 
            type="link"
            onClick={() => console.log("Ir a Github")}
          >
            <GithubOutlined style={{fontSize: "17px"}} />
          </Button>
        </Footer>
      </Layout>
      {children}
    </Layout>
  );
};
