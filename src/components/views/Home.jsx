import React, { Component } from "react"
import PictureCard from "../features/PictureCard"
import SimpleCard from "../features/SimpleCard"
import idCard from "../../assets/images/svg-icons/id-card.svg"
import strong from "../../assets/images/svg-icons/strong.svg"
import sword from "../../assets/images/svg-icons/sword.svg"
import types from "../../assets/images/svg-icons/types.svg"


class Home extends Component {
  render() {
    return (
      <div className="homeSection">
        <h2 className="appSubTitle">Heroe Creator</h2>
        <div className="cardsContainer">
          <SimpleCard title="Introduction">
            Isn't amazing how fantasy things make
            ourlives more excited ? well, to be honest
            it's like I'm a big knower about it but we've
            always wanted to be heroes.
          </SimpleCard>
          <SimpleCard title="How does this work ?"> 
            All you have to do is going to the create heroe
            section, in there you only have to tell us about
            how your heroe will be like :)
          </SimpleCard>
          <PictureCard title="Give a name to your heroe" image={idCard}></PictureCard>
          <PictureCard title="Tell us about your heroe weapons" image={sword}></PictureCard>
          <PictureCard title="Is your heroe skillful ?" image={strong}></PictureCard>
          <PictureCard title="Is your heroe human, alien, ogre ?" image={types}></PictureCard>
        </div>
      </div>
    )
  }
}


export default Home