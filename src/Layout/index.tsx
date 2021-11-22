import { Layout, Menu } from 'antd';
import { BarChartOutlined, TableOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const { Sider, Content } = Layout;

interface Props {
  children: React.ReactChild;
}
export const DashBoarLayout: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item
            key="1"
            icon={<BarChartOutlined />}
            onClick={() => history.push('/')}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<TableOutlined />}
            onClick={() => history.push('/tables')}
          >
            Date Table
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
