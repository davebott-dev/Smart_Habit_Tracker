import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <button onClick={(prev) => setCount(prev + 1)}>Increment</button>
    </div>
    <div>
      <p>Current count: {count}</p>
    </div>
    </>
  )
}

export default App

// placeholder before I add the real code