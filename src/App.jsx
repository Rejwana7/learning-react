
import './App.css'
import { useState } from "react";
import Counter from "./components/Counter.jsx";
import Display from './components/Display.jsx';
function App() {
   const [count, setCount] = useState(0);

  return (
    <div>
        <p>Parent Component </p>
     <Counter count={count} setCount={setCount}/>
     <Display count={count} setCount={setCount} />
    </div>
  
    
  );
}

export default App
