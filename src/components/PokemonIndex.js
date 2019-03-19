import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import API from '../adapters/API'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: ''
  }

  componentDidMount = () => {
    API.getAllPokemon().then(pokemon => this.setState({ pokemon }))
  }

  handleChange = (_, { value }) => {
    this.setState({ searchTerm: value })
  }

  addPokemon = pokemon =>
    this.setState({
      pokemon: [...this.state.pokemon, pokemon]
    })

  filteredPokemon = () =>
    this.state.pokemon.filter(p => p.name.includes(this.state.searchTerm))

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce(this.handleChange, 500)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection pokemon={this.filteredPokemon()} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    )
  }
}

export default PokemonPage
