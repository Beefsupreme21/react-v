import { Routes, Route, Link, useLocation } from 'react-router-dom'
import TodoPage from './pages/TodoPage'
import AboutPage from './pages/AboutPage'
import CounterPage from './pages/CounterPage'
import PokemonPage from './pages/PokemonPage'
import PokemonDetailPage from './pages/PokemonDetailPage'
import NotesPage from './pages/NotesPage'
import ContactPage from './pages/ContactPage'
import FeaturesPage from './pages/FeaturesPage'
import NotFoundPage from './pages/NotFoundPage'

function NavLink({ to, children }) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded ${
        isActive
          ? 'bg-[#646cff] text-white'
          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
    >
      {children}
    </Link>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#242424] text-[#213547] dark:text-[rgba(255,255,255,0.87)]">
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              My App
            </Link>
            <nav className="flex gap-4">
              <NavLink to="/todos">Todos</NavLink>
              <NavLink to="/counter">Counter</NavLink>
              <NavLink to="/pokemon">Pokemon</NavLink>
              <NavLink to="/notes">Notes</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/features">Features</NavLink>
              <NavLink to="/about">About</NavLink>
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/todos" element={<TodoPage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/pokemon" element={<PokemonPage />} />
          <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
