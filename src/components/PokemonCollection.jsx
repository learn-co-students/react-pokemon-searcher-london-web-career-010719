import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

 

  listCards = () => {
    return this.props.displayedPokemon.map(pokemon => <PokemonCard pokemon={pokemon} switchSide={this.switchSide}/>)
  }

  
  render() {
    return (
      <div>
       <Card.Group itemsPerRow={6}>
      {this.listCards()}
      </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
