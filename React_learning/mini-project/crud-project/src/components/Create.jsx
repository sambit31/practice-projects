import { nanoid } from "nanoid"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";

const Create = (props) => {
  const { todos, settodos } = props

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const submitHandler = (data) => {
    if (!data.title.trim()) return // ignore empty

    const newtodo = {
      id: nanoid(),
      title: data.title,
      isComplete: false,
    }

    settodos([...todos, newtodo])

   toast.success("Task added successfully!");

    reset() // clears the input after submit
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex items-center gap-3 mb-6"
    >
      <input
        {...register("title", { required: "Task title is required" })}
        type="text"
        placeholder="Enter a task..."
        className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition"
      >
        Add
      </button>
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}
    </form>
  )
}

export default Create
