import React, { Component } from "react";
import SimpleCard from "../features/SimpleCard"
import AlertBox from "../features/AlertBox"
import { checkForFalsyObjectValues } from "../../utils/object"


class Form extends Component {
  state = {
    heroe: {
      name: "",
      race: "",
      alignment: "",
      description: ""
    },
    falsyHeroeError: false
  }

  render() {
    const { state: { heroe: { name, race, alignment, description }, falsyHeroeError}, onChangeHandler, onClickHandler } = this

    return (
      <div className="formSection">
        { falsyHeroeError ? <AlertBox text="All fields are required" /> : "" }
        <h2 className="appSubTitle">Create your heroe</h2>
        <SimpleCard title="Heroe information">
          Complete this form to create your heroe
        </SimpleCard>
        <div className="formGroups">
          <div className="formGroup">
            <label htmlFor="name" className="formLabel">Your heroe name</label>
            <input 
              type="text" 
              className="formInput" 
              placeholder="Your heroe name"
              id="name"
              name="name"
              value={name}
              onChange={onChangeHandler}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="race" className="formLabel">Your heroe race</label>
            <input 
              type="text" 
              className="formInput" 
              placeholder="Your heroe race"
              id="race"
              name="race"
              value={race}
              onChange={onChangeHandler}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="alignment" className="formLabel">Your heroe alignment</label>
            <input 
              type="text" 
              className="formInput" 
              name="alignment"
              placeholder="Your heroe alignment"
              id="alignment"
              value={alignment}
              onChange={onChangeHandler}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="race" className="formLabel">Tell us about your heroe</label>
            <textarea 
              className="formInput formTextarea" 
              name="description"
              value={description}
              placeholder={name ? `Tell us about ${name}` : "Your heroe description"}
              id="description"
              onChange={onChangeHandler}
            ></textarea>
          </div>
          <div className="formGroup alignRight">
            <button 
              className="formButton"
              onClick={onClickHandler}
            >Create heroe</button>
          </div>
        </div>
      </div>
    )
  }

  onChangeHandler = (event) => {
    const { target: { name, value }} = event
    const { state: { heroe }} = this

    this.setState({
      heroe: {
        ...heroe,
        [name]: value
      }
    })
  }

  onClickHandler = (event) => {
    const { state: { heroe }, props: { createHeroe }, cleanHeroeData} = this
    let falsyHeroe = checkForFalsyObjectValues(heroe).hasFalsy

    if (falsyHeroe) {
      this.setState({
        falsyHeroeError: true
      })

      window.setTimeout(() => {
        this.setState({
          falsyHeroeError: false
        })
      }, 2000)

      return false
    } 

    createHeroe(heroe)
    cleanHeroeData()

  }

  cleanHeroeData = () => {
    this.setState({
      heroe: {
        name: "",
        race: "",
        alignment: "",
        description: ""
      }
    })
  }
}


export default Form