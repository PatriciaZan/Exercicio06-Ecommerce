import { Outlet, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

import { createContext, useState } from "react";
import { useEffect } from "react";
import { Suspense } from "react";

import Styled, { styled } from "styled-components";

export const ThemeContext = createContext(null);

function App() {
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
      {theme === "dark" ? (
        <DivDark>
          <NavBar toggle={toggleTheme} />

          <Outlet />
        </DivDark>
      ) : (
        <Div id={theme}>
          <NavBar toggle={toggleTheme} />

          <Outlet />
        </Div>
      )}
    </ThemeContext.Provider>
  );
}

export default App;

const Div = styled.div`
  width: 100vw;
  height: 100vh;
`;

const DivDark = styled.div`
  background-color: black;
  color: white;
  width: 100vw;
  height: 100vh;
`;
