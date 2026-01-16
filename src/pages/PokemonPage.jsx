import { useState, useEffect } from 'react'

function PokemonPage() {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const [pokemonId, setPokemonId] = useState(1)

  const fetchPokemon = async (id) => {
    setLoading(true)
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()
      setPokemon(data)
    } catch (error) {
      console.error('Error fetching pokemon:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPokemon(pokemonId)
  }, [pokemonId])

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Pokemon API</h1>
      
      <div className="flex gap-2 mb-6 justify-center">
        <input
          type="number"
          value={pokemonId}
          onChange={(e) => setPokemonId(Number(e.target.value))}
          min="1"
          max="1025"
          className="w-24 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a1a] focus:outline-none focus:border-[#646cff]"
        />
        <button
          onClick={() => fetchPokemon(pokemonId)}
          className="px-6 py-2 bg-[#646cff] text-white rounded-lg hover:bg-[#535bf2] transition-colors"
        >
          Fetch
        </button>
      </div>

      {loading && (
        <div className="text-center text-lg">Loading...</div>
      )}

      {pokemon && !loading && (
        <div className="bg-gray-50 dark:bg-[#1a1a1a] p-6 rounded-lg">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold capitalize mb-2">{pokemon.name}</h2>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="mx-auto"
            />
          </div>
          <div className="space-y-2">
            <p><span className="font-semibold">Height:</span> {pokemon.height / 10}m</p>
            <p><span className="font-semibold">Weight:</span> {pokemon.weight / 10}kg</p>
            <div>
              <span className="font-semibold">Types: </span>
              {pokemon.types.map(type => (
                <span key={type.type.name} className="inline-block bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded mr-2 capitalize">
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PokemonPage
