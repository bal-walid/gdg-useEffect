import { Link } from "react-router-dom";

const routes = [
  { name: "Timer", path: "/timer" },
  { name: "Counter", path: "/counter" },
  { name: "Weather", path: "/weather" },
];

const Navbar = () => {
  return (
    <>
      {routes.map((route) => (
        <Link key={route.path} to={route.path}>
          {route.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
