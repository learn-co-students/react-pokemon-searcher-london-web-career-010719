import React from "react"
import { Card } from "semantic-ui-react"

class PokemonCard extends React.Component {
  state = {
    cardFront: true
  }

  flipCard = () =>
    this.setState({
      cardFront: !this.state.cardFront
    })

  render() {
    const { stats, name, sprites } = this.props.pokemon

    return (
      <Card onClick={this.flipCard}>
        <div>
          <div className="image">
            <img
              alt="oh no!"
              src={this.state.cardFront ? sprites.front : sprites.back}
            />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats.find(stat => stat.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
