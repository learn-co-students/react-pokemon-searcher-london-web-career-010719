import React from 'react'
import PokemonCollection from './PokemonCollection.jsx'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import { timingSafeEqual } from 'crypto';
const API = `http://localhost:3000/pokemon`


class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchFilter: ""
  }

  componentDidMount () {
    fetch(API)
    .then(resp => resp.json())
    .then(resp => 
      this.setState({
        pokemon: resp
      }))
  }

  displayed = () => {
    return this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.searchFilter))
  }

  handleSearchChange = (event) => {
    this.setState({
      searchFilter: event.target.value
    })
  }

  addNewPokemon = (n) => {
    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: n.name,
        stats: [{"name": "hp", "value": n.hp}],
        sprites: {front: n.frontUrl, back: n.backUrl}
      })
    }
    fetch(`${API}`, options)
    .then(resp => resp.json())
    .then(poke => 
      this.setState({
        pokemon: [...this.state.pokemon, poke]
      }))


  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection displayedPokemon={this.displayed()}/>
        <br />
        <PokemonForm createNew={this.addNewPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
