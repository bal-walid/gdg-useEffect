import { Link } from "react-router-dom";

const Navbar = ()  => {
  console.log('RENDER');
  return (
    <>
      <Link to={"/timer"}>A</Link>
      <Link to={"/counter"}>B</Link>
    </>
  );
}

export default Navbar;  