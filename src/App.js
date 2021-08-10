import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import CityList from './pages/CityList'


const IndexList = [
  {
    path: '/'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/citylist',
    component: CityList
  }
]
export default class App extends Component {


  renderIndexRouter = () => {
    return IndexList.map(item =>

      item?.component ?
        <Route key={item.path} path={item.path} component={item.component} />
        :
        <Route key={item.path} path={item.path} exact render={() => {
          <Redirect to="/home" />
        }} />
    )
  }

  render () {
    return (
      <div>
        <Router>
          {this.renderIndexRouter()}
        </Router>
      </div>
    )
  }
}
