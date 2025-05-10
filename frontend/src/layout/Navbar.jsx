import React from "react";
import { AppBar, Toolbar, Box, InputBase, IconButton,Switch  } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Link, Outlet } from "react-router";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Navbar({darkMode , toggleDarkMode }) {
  return (
    //root div for navbar
    <>
      <AppBar
        position="sticky"
        sx={{
          zIndex: 10,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255,255,255,0.2)",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Left: Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              MyLogo
            </Link>
          </Box>

          {/* Center: Search Bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "40%",
              bgcolor: "white",
              borderRadius: "4px",
              px: 2,
            }}
          >
            <InputBase
              placeholder="Search…"
              sx={{ width: "100%" }}
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton type="button" aria-label="search">
              <Search />
            </IconButton>
          </Box>
          <Box>
          <LightModeIcon />
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <DarkModeIcon />
          </Box>
          
          {/* Right: Navigation Links */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Link to="/" className="text-xl font-medium">
              Home
            </Link>
            <Link to="/dashboard" className="text-xl font-medium">
              Dashboard
            </Link>
            <Link to="/projects" className="text-xl font-medium">
              Project
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default Navbar;
