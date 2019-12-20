import React from "react"
import propType from "prop-types"


const NavigationItem = ({ navItem, setCurrentPage, currentPage }) => {
  let { title, ariaLabel, pageName } = navItem
  let navItemClass = `navItem ${currentPage === pageName ? "activePage" : ""}`
  
  return (
    <span
      className={navItemClass}
      tabIndex="0"
      role="button"
      aria-label={ariaLabel}
      onClick={() => setCurrentPage(pageName)}
    >
      { title }
    </span>
  )
}


NavigationItem.propTypes = {
  navItem: propType.object.isRequired,
  setCurrentPage: propType.func.isRequired,
  currentPage: propType.string.isRequired
}


export default NavigationItem
