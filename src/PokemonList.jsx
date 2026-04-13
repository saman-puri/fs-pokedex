import React from 'react'
import { Link } from 'react-router-dom'

const PokemonList = ({ pokemonList = [] }) => {
  return (
    <div className="list-container">
      {pokemonList.map(({ name }, index) => (
        <Link
          key={name}
          to={`/pokemon/${name}`}
          className="list-item"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png)`
          }}
        >
          <div className="list-item-name">
            {name}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PokemonList