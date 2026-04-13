import React from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'
import { useApi } from './useApi'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import PokemonPage from './PokemonPage'
import PokemonList from './PokemonList'

const App = () => {
  const { data: pokemon, error, isLoading } = useApi('https://pokeapi.co/api/v2/pokemon/?limit=50')

  const match = useMatch('/pokemon/:name')
  const currentPokemonName = match?.params?.name

  const results = pokemon?.results || []
  const currentIndex = results.findIndex((p) => p.name === currentPokemonName)

  const previous = currentIndex > 0 ? results[currentIndex - 1] : null
  const next = currentIndex >= 0 && currentIndex < results.length - 1 ? results[currentIndex + 1] : null

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <div className="container">
      <h1>Pokedex version 2</h1>

      <Routes>
        <Route path="/" element={<PokemonList pokemonList={results} />} />
        <Route path="/pokemon/:name" element={<PokemonPage previous={previous} next={next} />} />
      </Routes>

      <footer>Pokémon and Pokémon character names are trademarks of Nintendo.</footer>
    </div>
  )
}

export default App