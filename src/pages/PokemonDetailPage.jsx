import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function PokemonDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if (!response.ok) {
          navigate('/pokemon')
          return
        }
        const data = await response.json()
        setPokemon(data)
      } catch (error) {
        console.error('Error fetching pokemon:', error)
        navigate('/pokemon')
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [id, navigate])

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (!pokemon) {
    return null
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        to="/pokemon"
        className="inline-block mb-6 text-[#646cff] hover:underline"
      >
        ← Back to Pokemon List
      </Link>

      <div className="bg-gray-50 dark:bg-[#1a1a1a] p-6 rounded-lg">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold capitalize mb-4">
            #{pokemon.id} {pokemon.name}
          </h1>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mx-auto w-48"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="font-semibold mb-1">Height</p>
            <p>{pokemon.height / 10}m</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Weight</p>
            <p>{pokemon.weight / 10}kg</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="font-semibold mb-2">Types</p>
          <div className="flex gap-2">
            {pokemon.types.map(type => (
              <span
                key={type.type.name}
                className="bg-blue-200 dark:bg-blue-800 px-3 py-1 rounded capitalize"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold mb-2">Abilities</p>
          <div className="flex flex-wrap gap-2">
            {pokemon.abilities.map(ability => (
              <span
                key={ability.ability.name}
                className="bg-green-200 dark:bg-green-800 px-3 py-1 rounded capitalize"
              >
                {ability.ability.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetailPage
