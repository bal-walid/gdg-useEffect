import { useEffect, useState } from "react";

const Window = () => {
  const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight});
  const resize = () => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [])
  return (
    <div className="window">
      <p>{size.width} x {size.height}</p>
    </div>
  );
}

export default Window;