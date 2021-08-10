import React, { Component } from 'react'
import { Carousel, Flex, Grid, WingBlank } from 'antd-mobile'

import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'
import './index.scss'
import SearchHeader from '../../component/SearchHeader'

const NavList = [
    {
        img: Nav1,
        title: '整租',
        path: '/home/findHome'
    },
    {
        img: Nav2,
        title: '合租',
        path: '/home/findHome'

    },
    {
        img: Nav3,
        title: '地图找房',
        path: '/home/findHome'

    },
    {
        img: Nav4,
        title: '去出租',
        path: '/home/findHome'

    },
]

const data = Array.from(new Array(4)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}))


const newsList = [
    {
        id: 0,
        imgSrc: '',
        title: '123',
        from: '456',
        date: '2021'
    }
]

// const curCity = new window.BMap.localCity()

export default class Index extends Component {

    state = {
        data: ['1', '2', '3'],
        curCityName: '杭州'
    }
    componentDidMount () {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            })
        }, 100)

    }

    renderCarouselItem = () => {
        return this.state.data.map(item =>
            <a
                key={item}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: 200 }}
            >
                <img
                    src={`https://zos.alipayobjects.com/rmsportal/${item}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                />
            </a>
        )
    }

    renderFlexItem = () => {
        return NavList.map(item =>
            < Flex.Item key={item.title}
                onClick={() => {
                    this.props.history.push(item.path)
                }}
            >
                <img src={item.img}></img>
                <h2>{item.title}</h2>
            </Flex.Item>
        )
    }

    // 渲染最新资讯
    renderNews () {
        return newsList.map(item => (
            <div className="news-item" key={item.id}>
                <div className="imgwrap">
                    <img
                        className="img"
                        src={item.imgSrc}
                        alt=""
                    />
                </div>
                <Flex className="content" direction="column" justify="between">
                    <h3 className="title">{item.title}</h3>
                    <Flex className="info" justify="between">
                        <span>{item.from}</span>
                        <span>{item.date}</span>
                    </Flex>
                </Flex>
            </div>
        ))
    }

    render () {
        return (
            <div className="index">
                <div className="swiper">
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {this.renderCarouselItem()}
                    </Carousel>
                    {/* 搜索框 */}
                    <SearchHeader cityName={this.state.curCityName} />
                </div>


                <Flex className="Nav">
                    {
                        this.renderFlexItem()
                    }
                </Flex>

                <div className="group">
                    <h3 className="group-title">
                        租房小组 <span className="more">更多</span>
                    </h3>

                    <Grid data={data} columnNum={2}
                        square={false}
                        hasLine={false}
                        renderItem={item => (
                            <Flex className="group-item" justify="around" key={item.text}>
                                <div className="desc">
                                    <p className="title">{item.text}</p>
                                    <span className="info">{item.text}</span>
                                </div>
                                <img src={item.icon} alt="" />
                            </Flex>
                        )}
                    />
                </div>

                {/* 最新资讯 */}
                <div className="news">
                    <h3 className="group-title">最新资讯</h3>
                    <WingBlank size="md">{this.renderNews()}</WingBlank>
                </div>

            </div>
        )
    }
}
