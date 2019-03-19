import React from 'react'
import { Form } from 'semantic-ui-react'
import API from '../adapters/API'

class PokemonForm extends React.Component {
  state = {
    name: '',
    hp: '',
    front: '',
    back: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    const { name, hp, front, back } = this.state

    const newPokemon = {
      name,
      stats: [{ value: hp, name: 'hp' }],
      sprites: { front, back }
    }

    API.createPokmon(newPokemon).then(this.props.addPokemon)
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input
              onChange={this.handleChange}
              fluid
              label='Name'
              placeholder='Name'
              name='name'
            />
            <Form.Input
              onChange={this.handleChange}
              fluid
              label='hp'
              placeholder='hp'
              name='hp'
            />
            <Form.Input
              onChange={this.handleChange}
              fluid
              label='Front Image URL'
              placeholder='url'
              name='front'
            />
            <Form.Input
              onChange={this.handleChange}
              fluid
              label='Back Image URL'
              placeholder='url'
              name='back'
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
