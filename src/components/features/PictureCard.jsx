import React from "react"


const PictureCard = ({ image, children, title }) => {
  return (
    <article className="card">
      <header className="cardHeader">
        <img src={image} alt="card poster" className="cardImage" />
      </header>
      <section className="cardBody">
        <h4 className="cardTitle">{ title }</h4>
        <p className="cardContent">
          { children }
        </p>
      </section>
    </article>
  )
}


export default PictureCard