import { useState, useEffect, useRef } from 'react'

function TimerPage() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
    }

    // Cleanup function - runs when component unmounts or isRunning changes
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [isRunning])

  const start = () => setIsRunning(true)
  const pause = () => setIsRunning(false)
  const reset = () => {
    setSeconds(0)
    setIsRunning(false)
  }

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const secs = totalSeconds % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Timer & Stopwatch</h1>

      <div className="bg-gray-50 dark:bg-[#1a1a1a] p-8 rounded-lg text-center mb-8">
        <div className="text-6xl font-mono font-bold mb-8">
          {formatTime(seconds)}
        </div>

        <div className="flex gap-4 justify-center">
          {!isRunning ? (
            <button
              onClick={start}
              className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
            >
              Start
            </button>
          ) : (
            <button
              onClick={pause}
              className="px-8 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
            >
              Pause
            </button>
          )}
          <button
            onClick={reset}
            className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <p className="font-semibold mb-2">What you're learning:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><strong>useEffect:</strong> Runs side effects (setInterval)</li>
          <li><strong>useRef:</strong> Stores interval ID that persists across renders</li>
          <li><strong>Cleanup Function:</strong> Clears interval when component unmounts or state changes</li>
          <li><strong>setInterval:</strong> Runs code repeatedly every second</li>
          <li><strong>Time Formatting:</strong> Converting seconds to HH:MM:SS format</li>
        </ul>
      </div>
    </div>
  )
}

export default TimerPage
