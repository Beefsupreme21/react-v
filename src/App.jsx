import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white dark:bg-[#242424] text-[#213547] dark:text-[rgba(255,255,255,0.87)] flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-8 text-center w-full">
      <div>
        <a href="https://vite.dev" target="_blank" className="font-medium text-[#646cff] no-underline hover:text-[#747bff] dark:hover:text-[#535bf2]">
          <img 
            src={viteLogo} 
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" 
            alt="Vite logo" 
          />
        </a>
        <a href="https://react.dev" target="_blank" className="font-medium text-[#646cff] no-underline hover:text-[#747bff] dark:hover:text-[#535bf2]">
          <img 
            src={reactLogo} 
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-logo-spin motion-reduce:animate-none" 
            alt="React logo" 
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold leading-tight mb-6">Vite + React 342</h1>
      <div className="p-8">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg border border-transparent px-5 py-3 text-base font-medium bg-[#f9f9f9] dark:bg-[#1a1a1a] cursor-pointer transition-colors hover:border-[#646cff] focus:outline-none focus-visible:outline-4 focus-visible:outline-auto focus-visible:outline-[#646cff]"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="font-mono bg-gray-100 dark:bg-[#1a1a1a] px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
      <div className='bg-red-500 mt-4 p-4 rounded'>
        <h1 className="text-2xl font-bold text-white">Hello World</h1>
      </div>
      </div>
    </div>
  )
}

export default App
