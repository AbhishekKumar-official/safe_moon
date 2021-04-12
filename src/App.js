import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App
