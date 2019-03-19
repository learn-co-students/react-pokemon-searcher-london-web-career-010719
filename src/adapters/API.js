const BASE_URL = 'http://localhost:3000/pokemon'

const getAllPokemon = () => fetch(BASE_URL).then(resp => resp.json())

const createPokmon = pokemon =>
  fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pokemon)
  }).then(resp => resp.json())

export default { getAllPokemon, createPokmon }
