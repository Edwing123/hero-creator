import React, { Component } from "react"
import PictureCard from "../features/PictureCard"
import SimpleCard from "../features/SimpleCard"
import dragon from "../../assets/images/svg-icons/dragon.svg"


class HeroesList extends Component {
  render() {
    const { props: { heroes }} = this
    let heroesCount = heroes.length

    return (
      <div className="heroesList">
        <h2 className="appSubTitle">Here are the heroes you created</h2>
        <SimpleCard title="Heroes count">
          <span className="alignCenter displayBlock">{ heroesCount ? heroesCount : "No heroes created" }</span>
        </SimpleCard>
        <div className="cardsContainer">
          {
            heroes.map((heroe) => (
              <PictureCard title={heroe.name} image={dragon}>
                { heroe.description }
              </PictureCard>
            ))
          }
        </div>
      </div>
    )
  }
}


export default HeroesList