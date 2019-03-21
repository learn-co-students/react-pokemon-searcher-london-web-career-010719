import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const API = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {

  state = {
    allPokemons: [],
    searchTerm: ''
  }

  componentDidMount () {
    fetch(API)
    .then(resp => resp.json())
    .then(pokemons => this.setState({allPokemons: pokemons}))
  }

  addNewPokemon = (data) => {
    const newPokemon = {
      "name": data.name,
      "stats": [
        {
          "value": data.hp,
          "name": "hp"
        }
      ],
      "sprites": {
        "front": data.frontUrl,
        "back": data.backUrl
      }
    }
    return fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
      .then(res => res.json())
      .then(pokemons => this.setState({ allPokemons: pokemons }))
  }

  handleSearchChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  displayPokemons = () => this.state.allPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection allPokemons={this.displayPokemons()} />
        <br />
        <PokemonForm allPokemons={this.displayPokemons()} addNewPokemon={this.addNewPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
