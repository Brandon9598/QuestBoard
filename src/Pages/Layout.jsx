import React from 'react'
import { Layout } from 'antd';
import QuestNavbar from '../Components/QuestNavbar';

const { Header, Content, Footer } = Layout; 

const CustomLayout = props => {
    return (
        <div>
            <Layout className="layout">
                <Header>
                    <QuestNavbar />
                </Header>
                <Content>
                    {props.children}
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    <section class="p-5 bg-primary">
                        <p class="text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ut provident minus ullam aperiam, nemo, officiis quod repudiandae sunt repellat reiciendis deserunt impedit? Quis adipisci soluta illo ipsam explicabo perspiciatis.</p>
                    </section>
                </Footer>
            </Layout>
        </div>
    )
}

export default CustomLayout
