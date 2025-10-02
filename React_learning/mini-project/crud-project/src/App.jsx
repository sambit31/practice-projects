import { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

function App() {
  const [todos, Settodos] = useState([
    { id: 1, title: "Learn React", isComplete: false },
  ])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-6">
      <div className="w-full max-w-xl bg-green-100 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          ✨ Todo App
        </h1>

        <Create todos={todos} settodos={Settodos} />
        <Read todos={todos} settodos={Settodos} />
      </div>
    </div>
  )
}

export default App
