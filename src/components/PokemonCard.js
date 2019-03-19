import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    flipped: false
  }
  handleClick = () => this.setState({ flipped: !this.state.flipped })

  render() {
    const { name, stats, sprites } = this.props
    const hp = stats.find(stat => stat.name === 'hp')
    const cardStyle = {
      'max-width': '100px',
      'max-height': '100px'
    }

    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className='image'>
            <img
              style={cardStyle}
              src={this.state.flipped ? sprites.back : sprites.front}
              alt={name}
            />
          </div>
          <div className='content'>
            <div className='header'>{name}</div>
          </div>
          <div className='extra content'>
            <span>
              <i className='icon heartbeat red' />
              {hp.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
