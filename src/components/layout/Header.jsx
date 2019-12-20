import React, { Component } from "react"
import Menu from "../navigation/Menu"
import AppIcon from "../features/AppIcon"


class Header extends Component {
  render() {
    return (
      <header className="header">
        <AppIcon />
        <Menu />
      </header>
    )
  }
}


export default Header