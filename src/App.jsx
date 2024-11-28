import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./output.css";

function App() {
  const route = useLocation().pathname;
  const colors = {
    "/": { main: "#B9D8C9", nav: "#0C1B33", icon: "#0C1B33"},
    "/counter": { main: "#000000", nav: "#ffffff", icon: "#000000" },
    "/weather": { main: "#75b4e3", nav: "#8fe0ff", icon: "#75b4e3" },
  };
  console.log(route);
  return (
    <>
      <Navbar bg={colors[route].nav} iconColor={colors[route].icon} />
      <main
        style={{ backgroundColor: colors[route].main }}
        className="flex items-center justify-center h-full transition-colors"
      >
        <Outlet />
      </main>
    </>
  );
}

export default App;
