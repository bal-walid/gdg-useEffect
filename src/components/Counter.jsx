import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);
  const [speed, setSpeed] = useState(1)
  const updateCount = () => setCount((count) => count + speed);

  return (
    <div className="counter">
      <p>{count}</p>
      <form>
        <input type="number" value={input} onChange={(e) => setInput(parseInt(e.target.value))} />
        <button type="button" onClick={() => setSpeed(input)}>Change Speed</button>
     </form>
    </div>
  );
};

export default Counter;
