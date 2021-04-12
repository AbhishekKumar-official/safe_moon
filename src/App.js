import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import Particles from "react-particles-js"
import Header from "./components/Header"
import Home from "./components/Home"
export class App extends Component {
  render() {
    return (
      <div>
        {/* <Particles
          id="particles-js"
          params={{
            particles: {
              number: {
                value: 50,
              },
              color: {
                value: "#cccccc",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
              },
              size: {
                value: 7,
              },
              lineLinked: {
                distance: 0,
                color: "#262C43",
              },
              move: {
                speed: 4,
              },
            },
          }}
        /> */}
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App
