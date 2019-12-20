import React from "react"
import appIcon from "../../assets/images/svg-icons/shield.svg"


const AppIcon = () => {
  return (
    <div className="appIconBox">
      <img className="appIcon" src={appIcon} alt="app icon" />
      <h1 className="appTitle">
        Heroe Creator
      </h1>
    </div>
  )
}


export default AppIcon
