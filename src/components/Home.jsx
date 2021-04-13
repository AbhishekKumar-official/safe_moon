import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.svg"
import graph from "../images/graph.png"
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
      <div className="content">
        <div className="container">
          <h1>SafeMoon Protocol</h1>
          <p>Static Rewards, LP Acquisition, Manual Burn<br/><br/>
          A common misconception with the heavy APY average is the
  subjectivity of the impermanent loss from staking an LP (liquidity
  provider) in a farming reward generator. With the explosion of DeFi
  we have seen too many new cryptocurrency prospectors get sucked into a
  high APY LP-farming trap, feeling hopeless as they are pushed out by earlier
  buyers with higher staking rewards. We’ve all been there, seeing those shiny
  6 digit figures can be pretty damn tempting to jump in. However, almost
  always the token suffers from the inevitable valuation bubble, which is then
  followed by the burst and the impending collapse of the price. This Is why we
  have seen the mass adoption of static rewards, also known as reflection, a
  separate concept that seeks to eliminate the troubles caused by farming
  rewards.</p>
  <h1>Why Static?</h1>
  <p>Static rewards solve a host of problems. First, the reward amount is
conditional upon the volume of the token being traded. This mechanism aims
to alleviate some of the downward sell pressure put on the token caused by
earlier adopters selling their tokens after farming crazy high APY’s. Second,
the reflect mechanism encourages holders to hang onto their tokens to
garner higher kick-backs which are based upon a percentages carried out
and dependant upon the total tokens held by the owner.</p>
        </div>
        <div className="container flex-content">
          <div className="content-left">
            <h1>Manual Burns</h1>
            <p>Sometimes burns matter; sometimes they don’t. A continuous burn on any
one protocol can be nice in the early days, however, this means the burn
cannot be finite or controlled in any way. Having burns controlled by the
team and promoted based on achievements helps to keep the community
rewarded and informed. The conditions of the manual burn and the amounts
can be advertised and tracked. SafeMoon aims to implement a burn strategy
that is beneficial and rewarding for those engaged for the long term.
Furthermore, the total number of SAFEMOON burned is featured on our
readout located on the website which allows for further transparency in
identifying the current circulating supply at any given point of time.</p>
          </div>
          <div className="content-right">
            <img src={graph} />
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Home
