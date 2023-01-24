import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContex from "../../context/AuthContext";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Logout from "../../user/Logout"


const Navbar = () => {
  const { loggedIn } = useContext(AuthContex);

  return (

    <>
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <VpnKeyIcon/>
        </IconButton>
        <Typography variant='h6' component='div' sx={{  flexGrow: 1 }}>
          CharlesJS
        </Typography>
        <Stack direction='row' spacing={4} style={{marginRight:"3rem"}}>
        <Link className='navbar-link' to="/">Home</Link>
      {loggedIn === false && (
        <>
          <Link className='navbar-link' to="/register">Register</Link>
          <Link className='navbar-link' to="/login">Login</Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Link className='navbar-link' to="/customer">Customer</Link>
          <Logout/>
        </>
      )}
        </Stack>
      </Toolbar>
    </AppBar>
    {/* <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
      <Link to="/">Home</Link>
      {loggedIn === false && (
        <>
          <Link to="/register">User register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Link to="/customer">Customer</Link>
          <Logout/>
        </>
      )}
    </div> */}
    </>
  );
};

export default Navbar;
