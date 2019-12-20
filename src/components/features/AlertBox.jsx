import React from "react"


const AlertBox = ({ text }) => {
  return (
    <div className="alertBox">
      <span className="alertText">
        { text }
      </span>
    </div>
  )
}


export default AlertBox