import React, { Component } from "react"
import Header from "./components/layout/Header"
import Main from "./components/layout/Main"
import CurrenPageContext from "./context/CurrentPage"
import LoadingScreen from "./components/features/LoadingScreen"
import "./assets/css/main.scss"


class App extends Component {
  state = {
    currentPage: "home",
    heroes: [],
    loading: true
  }

  render() {
    const { setCurrentPage, state: { currentPage, loading, heroes }, createHeroe} = this
    const providerValue = { setCurrentPage, currentPage, createHeroe, heroes }

    return (
      <div className="appContainer" id="app">
        <CurrenPageContext.Provider value={providerValue}>
          <Header />
          <Main />
          { loading ? <LoadingScreen text="Loading ..." /> : "" }
        </CurrenPageContext.Provider>
      </div>
    )
  }

  componentDidMount() {
    // experimental
    // let { pageName } =  window.history.state || { pageName: "home" }
    // window.history.pushState({}, "home section", "/")

    setTimeout(() => {
      this.setState({
        loading: false,
        // currentPage: pageName
      })
    }, 1500)
  }

  setCurrentPage = (page) => {
    let { state: { currentPage }} = this

    if (currentPage === page) {
      return false
    }

    this.setState({
      currentPage: page
    })

    // experimental
    // window.history.pushState({ pageName: page }, `${page.replace("-", " ")} section`, page === "home" ? "/" : page)
    // document.title = page === "home" ? "Hero Creator" : `${page.replace("-", " ")} section`
  }

  createHeroe = (heroe) => {
    const { state: { heroes }} = this
    heroes.push(heroe)

    this.setState({
      heroes
    })
  }
}


export default App
