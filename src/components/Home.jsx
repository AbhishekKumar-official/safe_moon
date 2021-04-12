import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.svg"
import "./Home.css"
class Home extends Component {
  render() {
    return (
      <>
      <nav>
        <div className="container">
          <a href="javascript:void(0)" className="logo">
            <img src={logo} />
          </a>
          <ul>
            <li>
              <NavLink to="#" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <a href="javascript:void(0)">Merch</a>
            </li>
            <li>
              <a href="javascript:void(0)">White Paper</a>
            </li>
            <li>
              <a href="javascript:void(0)">How to Buy</a>
            </li>
            <li>
              <a href="javascript:void(0)">Safemoon Contract</a>
            </li>
            <li>
              <a href="javascript:void(0)">Our Team</a>
            </li>
          </ul>
          <button className="btn-effect">Buy Now</button>
        </div>
      </nav>
      <div className="hero-section">
        <img src={logo} />
        <h1>SafeMoon Protocol</h1>
        <h3>Safely to the Moon</h3>
      </div>
      <div className="live-chart">
        <ul>
            <li>
              <span>$ 0.000000757</span>
              <small>Value</small>
            </li>
            <li>
              <span>$ 0.000000757</span>
              <small>Value</small>
            </li>
            <li>
              <span>$ 0.000000757</span>
              <small>Value</small>
            </li>
            <li>
              <span>$ 0.000000757</span>
              <small>Value</small>
            </li>
            <li>
              <span>$ 0.000000757</span>
              <small>Value</small>
            </li>
          </ul>
      </div>
      </>
    )
  }
}

export default Home
