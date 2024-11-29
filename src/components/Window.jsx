import { useEffect, useState } from "react";

const Window = () => {
  const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight});
  return (
    <div className="window">
      <p>{size.width} x {size.height}</p>
    </div>
  );
}

export default Window;