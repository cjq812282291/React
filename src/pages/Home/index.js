import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Index from '../Index'
import FindHome from '../FindHome'
import News from '../News'
import My from '../My'
import { TabBar } from 'antd-mobile'
import './index.css'

const TabList = [
    {
        title: '首页',
        icon: 'icon-ind',
        path: '/home',
        component: Index
    },
    {
        title: '找房',
        icon: 'icon-findHouse',
        path: '/home/findHome',
        component: FindHome

    },
    {
        title: '资讯',
        icon: 'icon-infom',
        path: '/home/news',
        component: News
    },
    {
        title: '我的',
        icon: 'icon-my',
        path: '/home/my',
        component: My

    },
]


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: props.location.pathname
        }
    }

    renderRoute = () => {
        return TabList.map(item =>
            <Route path={item.path}
                key={item.title}
                exact={item.path === '/home' ? true : false}
                component={item.component} />
        )
    }

    renderTabItem = () => {
        const { props } = this
        return TabList.map(item =>
            <TabBar.Item
                title={item.title}
                key={item.title}
                icon={
                    <i className={`iconfont ${item.icon}`}></i>
                }
                selectedIcon={
                    <i className={`iconfont ${item.icon}`}></i>
                }
                selected={this.state.selectedTab === item.path}
                onPress={() => {
                    this.setState({
                        selectedTab: item.path,
                    })
                    props.history.push(item.path)

                }}
            />
        )

    }

    componentDidUpdate (prevProps) {
        console.log('上一次路由信息componentDidUpdate', prevProps)
        console.log('现在路由信息componentDidUpdate', this.props)
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({
                selectedTab: this.props.location.pathname
            })
        }
    }


    render () {
        return (
            <div className="home">

                {this.renderRoute()}

                <TabBar
                    tintColor="#21b97a"
                    barTintColor="white"
                    noRenderContent={true}
                >
                    {this.renderTabItem()}
                </TabBar>
            </div>
        )
    }
}
