import { toast } from "react-toastify"

const Read = (props) => {
  const { todos, settodos } = props

  // ✅ Delete a todo
  const deleteHandler = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id)
    settodos(filtered)
    toast.error("Todo deleted");
  }

  // ✅ Toggle complete/incomplete
  const toggleCompleteHandler = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    )
    settodos(updated)
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3 text-gray-700">📋 Todos</h2>
      <ul className="space-y-3">
        {todos.length === 0 && (
          <p className="text-gray-500">No todos yet. Add some!</p>
        )}

        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded-xl shadow-sm"
          >
            <span
              className={`font-medium cursor-pointer ${
                todo.isComplete ? "text-green-600 line-through" : "text-gray-800"
              }`}
              onClick={() => toggleCompleteHandler(todo.id)}
              title="Click to toggle complete"
            >
              {todo.title}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => toggleCompleteHandler(todo.id)}
                className={`px-3 py-1 rounded-lg transition ${
                  todo.isComplete
                    ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              >
                {todo.isComplete ? "Undo" : "Done"}
              </button>

              <button
                onClick={() => deleteHandler(todo.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Read
