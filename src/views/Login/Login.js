import React, {Component} from 'react';
import {Layout,} from 'antd';
import LoginForm from './loginForm'
import './index.scss'

const { Header, Content } = Layout;

class Login extends Component {
    render() {
        return (
            <Layout className={'login'}>
                <Header className={'header'}>
                    <h1 />
                    <h2>React项目：后台管理系统</h2>
                </Header>
                <Content>
                    <LoginForm />
                </Content>
            </Layout>
        );
    }
}

export default Login;















