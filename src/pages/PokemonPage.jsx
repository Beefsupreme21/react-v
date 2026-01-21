import { useState, useEffect } from 'react'

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchAllPokemon = async () => {
      setLoading(true)
      try {
        // Fetch first 151 Pokemon (original gen)
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const data = await response.json()
        
        // Fetch details for each Pokemon
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url)
            return detailResponse.json()
          })
        )
        
        setPokemonList(pokemonDetails)
      } catch (error) {
        console.error('Error fetching pokemon:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAllPokemon()
  }, [])

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Pokemon List</h1>

      {loading && (
        <div className="text-center text-lg mb-8">Loading Pokemon...</div>
      )}

      {!loading && pokemonList.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {pokemonList.map(pokemon => (
            <div
              key={pokemon.id}
              className="bg-gray-50 dark:bg-[#1a1a1a] p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow"
            >
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="mx-auto mb-2"
              />
              <h3 className="font-semibold capitalize mb-1">#{pokemon.id} {pokemon.name}</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {pokemon.types.map(type => (
                  <span
                    key={type.type.name}
                    className="text-xs bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded capitalize"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PokemonPage
