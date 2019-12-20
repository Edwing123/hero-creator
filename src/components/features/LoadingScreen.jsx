import React from "react"
import swords from "../../assets/images/svg-icons/swords.svg"


function LoadingScreen({ text }) {
  return (
    <div className="loadingScreen">
      <img src={swords} alt="swords" className="loadingIcon" />
      <span className="loadingText">{ text }</span>
    </div>
  )
}


export default LoadingScreen