import { Outlet, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

import { createContext, useState } from "react";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  console.log(theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" data-theme={theme}>
        <NavBar toggle={toggleTheme} />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
