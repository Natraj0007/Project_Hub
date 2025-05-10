import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  IconButton,
} from "@mui/material";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Project from "./components/projects/Project";
import Navbar from "./layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Create the MUI theme dynamically based on darkMode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  // Toggle dark mode state
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  
  return (
    <>
    <ThemeProvider theme={theme}>
       <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode }/>}>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
