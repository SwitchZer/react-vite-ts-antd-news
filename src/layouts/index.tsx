import React from "react";
import { Layout, Menu, theme } from "antd";
import { HiSun, HiMoon } from "react-icons/hi";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { toggleTheme } from "@/features/config/slice";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

const { Header, Content, Footer } = Layout;

const AppLayout: React.FC = () => {
  const {
    token: { colorBgContainer, colorText },
  } = theme.useToken();

  const { isDark } = useAppSelector((store) => store.config);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Layout className="layout">
      <Header style={{ width: "100%" }}>
        <div
          onClick={handleToggleTheme}
          style={{
            float: "right",
            height: "100%",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {isDark ? (
            <HiSun color="yellow" size={20} />
          ) : (
            <HiMoon color="yellow" size={20} />
          )}
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          items={[
            {
              key: "/",
              label: "Home",
              onClick: () => navigate("/"),
            },
            {
              key: "/about",
              label: "About",
              onClick: () => navigate("/about"),
            },
            {
              key: "/profile",
              label: "Profile",
              onClick: () => navigate("/profile"),
            },
          ]}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
          background: colorBgContainer,
          color: colorText,
        }}
        className="site-layout-content"
      >
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default AppLayout;
