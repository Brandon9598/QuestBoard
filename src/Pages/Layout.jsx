import React from 'react'
import { Layout } from 'antd';
import QuestNavbar from '../Components/QuestNavbar';
import './Home.css'

const { Header, Content, Footer } = Layout; 

const CustomLayout = props => {
    return (
        <div>
            <Layout>
                <Header>
                    <QuestNavbar />
                </Header>
                <Content className="layout-content">
                    {props.children}
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    <section class="p-5 bg-primary">
                        <h3 class="text-light">Contact Info:</h3>
                        <p class="text-light">ludafieno@gmail.com</p>
                    </section>
                </Footer>
            </Layout>
        </div>
    )
}

export default CustomLayout
