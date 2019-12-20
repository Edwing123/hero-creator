import React, { Component } from "react"
import CurrentPageContext from "../../context/CurrentPage"
import Home from "../views/Home"
import Form from "../views/Form"
import HeroesList from "../views/HeroesList"
import NotFound from "../views/NotFound"


class Main extends Component {
  render() {
    return (
      <main className="main">
        <section className="section">
          <CurrentPageContext.Consumer>
            {
              ({ currentPage, createHeroe, heroes }) => {
                switch(currentPage) {
                  case "home":
                    return <Home />
                  case "heroe-creator":
                    return <Form createHeroe={createHeroe} />

                  case "heroes-list":
                    return <HeroesList heroes={heroes} />
                  
                  default:
                    return <NotFound />
                }
              }
            }
          </CurrentPageContext.Consumer>
        </section>
      </main>
    )
  }
}


export default Main