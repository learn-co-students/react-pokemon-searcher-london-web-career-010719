import React from "react"
import { Form } from "semantic-ui-react"

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props
      .addNewPokemon({
        name: event.target.name.value,
        stats: [
          {
            value: event.target.hp.value,
            name: "hp"
          }
        ],
        sprites: {
          front: event.target.frontUrl.value,
          back: event.target.backUrl.value
        }
      })
      .then(
        this.setState({
          name: "",
          hp: "",
          frontUrl: "",
          backUrl: ""
        })
      )
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              onChange={this.handleInputChange}
              value={this.state.hp}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              onChange={this.handleInputChange}
              value={this.state.frontUrl}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              onChange={this.handleInputChange}
              value={this.state.backUrl}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
