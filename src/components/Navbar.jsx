import { Link } from "react-router-dom";
import TimerIcon from "@mui/icons-material/Timer";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import CloudIcon from "@mui/icons-material/Cloud";
import WindowIcon from "@mui/icons-material/Window";

const routes = [
  { name: "Timer", path: "/", icon: <TimerIcon fontSize="large" /> },
  {
    name: "Counter",
    path: "/counter",
    icon: <LooksOneIcon fontSize="large" />,
  },
  { name: "Weather", path: "/weather", icon: <CloudIcon fontSize="large" /> },
  { name: "Window", path: "/window", icon: <WindowIcon fontSize="large" /> },
];

const Navbar = ({ bg, iconColor }) => {
  return (
    <div className="group h-full absolute">
      <div
        style={{ backgroundColor: bg }}
        className="h-full -translate-x-full group-hover:translate-x-0  shadow-sm flex flex-col justify-center gap-8 px-4 transition-all"
      >
        {routes.map((route) => (
          <Link key={route.path} to={route.path}>
            <div
              style={{ color: iconColor }}
              className="bg-white p-2 rounded-md"
            >
              {route.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
