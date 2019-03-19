import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    cardSide: this.props.pokemon.sprites.front
  }

  findHitPoints = (pokemon) => {
    for (const p of pokemon.stats) {
      if (p.name === "hp") 
        return p.value
    }
  }

  switchSide = () => {
    if (this.state.cardSide === this.props.pokemon.sprites.front) {
      this.setState({
        cardSide: this.props.pokemon.sprites.back
      })
    } else {
      this.setState({
        cardSide: this.props.pokemon.sprites.front
      }) 
    }
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={() => this.switchSide()}>
            <img src={this.state.cardSide} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHitPoints(this.props.pokemon)}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
