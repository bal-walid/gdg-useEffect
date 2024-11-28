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
    <div className="text-white flex flex-col items-center">
      <p className="text-[10rem] text-shadow">{count}</p>
      <form className="text-white flex flex-col gap-2 items-center">
        <input className="w-[100px] border-none outline-none p-2 text-center text-2xl bg-black" type="number" value={input} onChange={(e) => setInput(parseInt(e.target.value))} />
        <button className="text-2xl hover:font-semibold" type="button" onClick={() => setSpeed(input)}>Change Speed</button>
     </form>
    </div>
  );
};

export default Counter;
