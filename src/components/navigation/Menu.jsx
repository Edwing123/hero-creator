import React, { Component } from "react"
import NavigationItem from "./NavigationItem"
import CurrentPageContext from "../../context/CurrentPage"


class Menu extends Component {
  state = {
    navItems: [
      {
        id: 1,
        title: "Home",
        pageName: "home",
        ariaLabel: "home page"
      },
      {
        id: 2,
        title: "Create Hero",
        pageName: "heroe-creator",
        ariaLabel: "creator page",
      },
      {
        id: 3,
        title: "Heroes List",
        pageName: "heroes-list",
        ariaLabel: "heroes list page"
      }
    ]
  }

  render() {
    let { state: { navItems }} = this

    return (
      <nav className="navMenu" tabIndex="0">
        <CurrentPageContext.Consumer>
          {
            ({ setCurrentPage, currentPage }) => (
              navItems.map(navItem =>
                <NavigationItem 
                  navItem={navItem} 
                  key={navItem.id} 
                  setCurrentPage={setCurrentPage} 
                  currentPage={currentPage} />
              )
            )
          }
        </CurrentPageContext.Consumer>
      </nav>
    )
  }
}


export default Menu