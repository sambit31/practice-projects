import React, { useState } from "react";

function Toggle() {
  const [text, setText] = useState("Hello");


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-3xl font-bold mb-6">Toggle Text App</h1>
      <h2 className="text-2xl mb-6">{text}</h2>
      <button
        onClick={()=>setText(text === "Hello" ? "Goodbye" : "Hello")}
        className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all"
      >
        Toggle
      </button>
    </div>
  );
}

export default Toggle;
