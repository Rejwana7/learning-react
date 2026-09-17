import "tailwindcss";
import { use } from "react";
import { CounterContext } from "../Providers/counter.provider.jsx";

export default function Counter() {
  const { count, setCount } = use(CounterContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleIncrementByValue = (value) => {
    setCount(count + value);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
         <h2>Counter Component</h2>
       <button onClick={handleIncrement} className="rounded-lg bg-green-600 text-white px-4 py-2">
        Increment
       </button>
       <button onClick={() => handleIncrementByValue(5)} className="rounded-lg bg-blue-600 text-white px-4 py-2">
        Increment by value
      </button>
      {/* {count} */}
      <button onClick={handleDecrement} className="rounded-lg bg-blue-600 text-white px-4 py-2">
        Decrement
      </button>
    </div>

  );
}