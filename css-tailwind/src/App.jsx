import React from "react";

import { Outlet, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import { createContext, useState } from "react";
import { useEffect } from "react";

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const getLocalTheme = () => {
    const getTheme = localStorage.getItem("theme");
    setTheme(getTheme);
  };
  useEffect(() => {
    getLocalTheme();
  }, []);

  const setLocalTheme = () => {
    localStorage.setItem("theme", theme);
  };
  useEffect(() => {
    setLocalTheme();
  }, [theme]);

  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* <div className="app" data-theme={theme}> */}
      <div className="bg-white dark:bg-black dark:text-white" id={theme}>
        <NavBar toggle={toggleTheme} />

        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
  // <div className="bg-white dark:bg-black dark:text-white">App</div>;
}
