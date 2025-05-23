"use client";
import { useState } from "react";


function Counter({title, id}) {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    async function handleCounterAction(action) {
      setIsLoading(true);

      try {
        const response = await fetch(`/api/counter`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action,
            counterId: id
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to increment counter");
        }
        setCount((prev) => prev + (action === "increment" ? 1 : -1));
      } catch (error) {
        console.error("Error updating counter:", error);
      } finally {
        setIsLoading(false);
      }
    }

    return (
      <div className="flex flex-col items-center gap-6 px-8 py-12 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold">{title}</h2>

        <div className="flex items-center gap-4">
          <button 
            className="btn btn-circle btn-secondary"
            disabled={isLoading}
            onClick={() => handleCounterAction("decrement")}
          >
          -
          </button>

          <span className="text-2xl font-bold min-w-[3ch] text-center">
            {count}
          </span>

          <button
            className="btn btn-circle btn-success"
            disabled={isLoading}
            onClick={() => handleCounterAction("increment")}
          >
          +
          </button>
        </div>
      </div>
    );
}

export default Counter;