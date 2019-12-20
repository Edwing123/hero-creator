import React from "react"


const SimpleCard = ({ children, title }) => {
  return (
    <article className="card">
      <section className="cardBody">
        <h4 className="cardTitle">{ title }</h4>
        <p className="cardContent">
          { children }
        </p>
      </section>
    </article>
  )
}


export default SimpleCard