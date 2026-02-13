import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Discord Clone
        </h1>
        <div className="text-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="mt-4 text-gray-300">
            Click the button to test React is working
          </p>
        </div>
      </div>
    </div>
  )
}

export default App