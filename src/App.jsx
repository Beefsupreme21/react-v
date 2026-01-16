import { useState } from 'react'
import TodoPage from './pages/TodoPage'
import AboutPage from './pages/AboutPage'
import CounterPage from './pages/CounterPage'
import PokemonPage from './pages/PokemonPage'

function App() {
  const [currentPage, setCurrentPage] = useState('todos')

  return (
    <div className="min-h-screen bg-white dark:bg-[#242424] text-[#213547] dark:text-[rgba(255,255,255,0.87)]">
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">My App</h1>
            <nav className="flex gap-4">
              <button
                onClick={() => setCurrentPage('todos')}
                className={`px-4 py-2 rounded ${currentPage === 'todos' ? 'bg-[#646cff] text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                Todos
              </button>
              <button
                onClick={() => setCurrentPage('counter')}
                className={`px-4 py-2 rounded ${currentPage === 'counter' ? 'bg-[#646cff] text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                Counter
              </button>
              <button
                onClick={() => setCurrentPage('pokemon')}
                className={`px-4 py-2 rounded ${currentPage === 'pokemon' ? 'bg-[#646cff] text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                Pokemon
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className={`px-4 py-2 rounded ${currentPage === 'about' ? 'bg-[#646cff] text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                About
              </button>
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentPage === 'todos' && <TodoPage />}
        {currentPage === 'counter' && <CounterPage />}
        {currentPage === 'pokemon' && <PokemonPage />}
        {currentPage === 'about' && <AboutPage />}
      </main>
    </div>
  )
}

export default App
