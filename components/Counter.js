"use client";
import { useState } from "react";


function Counter(props) {
    const [count, setCount] = useState(0);
    return (
      <div className="flex flex-col items-center gap-6 px-8 py-12 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold">{props.title}</h2>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCount((prev) => prev - 1)} 
            className="btn btn-circle btn-secondary"
          >
          -
          </button>

          <span className="text-2xl font-bold min-w-[3ch] text-center">
            {count}
          </span>

          <button 
            onClick={() => setCount((prev) => prev + 1)}
          className="btn btn-circle btn-success"
          >
          +
          </button>
        </div>
      </div>
    );
}

export default Counter;