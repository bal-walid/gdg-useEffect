import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);
  const [speed, setSpeed] = useState(1)
  const updateCount = () => setCount((count) => count + speed);
  useEffect(() => {
    const id = setInterval(() => {
      updateCount();
      console.log(`Running: ${id}`);
    }, 1000);
    return () => clearInterval(id);
  }, [speed]);
  return (
    <div>
      <div>Counter </div>
      <p>{count}</p>
      <form >
        <input type={'number'} value={input} onChange={(e) => setInput(parseInt(e.target.value))} />
        <button type="button" onClick={() => setSpeed(input)}>Speed</button>
     </form>
    </div>
  );
};

export default Counter;
