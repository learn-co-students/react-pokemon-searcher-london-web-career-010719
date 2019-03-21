import React from "react"
import PokemonCollection from "./PokemonCollection"
import PokemonForm from "./PokemonForm"
import { Search } from "semantic-ui-react"
import _ from "lodash"

const API = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    search: ""
  }

  componentDidMount() {
    return fetch(API)
      .then(res => res.json())
      .then(pokemons => this.setState({ pokemons: pokemons }))
  }

  handleSearchChange = event => {
    this.setState({
      search: event.target.value
    })
  }

  filterPokemon = searchTerm => {
    return this.state.pokemons.filter(pokemon =>
      pokemon.name.includes(searchTerm)
    )
  }

  addNewPokemon = pokemon => {
    return fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemon)
    })
      .then(res => res.json())
      .then(pokemon =>
        this.setState({
          pokemons: [...this.state.pokemons, pokemon]
        })
      )
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          value={this.state.search}
          onSearchChange={this.handleSearchChange}
          showNoResults={false}
        />
        <br />
        <PokemonCollection pokemons={this.filterPokemon(this.state.search)} />
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon} />
      </div>
    )
  }
}

export default PokemonPage
