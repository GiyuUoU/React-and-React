import { useState , useEffect} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-5xl font-bold mb-6">Count: {count}</h2>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md transition transform hover:scale-105 active:scale-95"
        >
          +
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl shadow-md transition transform hover:scale-105 active:scale-95"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App
