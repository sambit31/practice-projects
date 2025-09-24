import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const baseBtn =
    "w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium shadow-sm transition duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-white dark:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
        Counter: {count}
      </h1>

      <div className="flex gap-3">
        {/* Increment */}
        <button
          className={`${baseBtn} bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-700 focus-visible:ring-indigo-400`}
          onClick={() => setCount(count + 1)}
          disabled={count === 20}
        >
          +
        </button>

        {/* Decrement */}
        <button
          className={`${baseBtn} bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-700 focus-visible:ring-indigo-400`}
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          -
        </button>

      </div>
    </div>
  );
}

export default Count;
