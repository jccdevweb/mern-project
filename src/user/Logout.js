import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContex from "../context/AuthContext";

const Logout = () => {
  const { getLoggedIn } = useContext(AuthContex);
  const navigate = useNavigate();
  
  const logOut = async () => {
    await axios.get("http://localhost:5001/auth/logout");
    await getLoggedIn();
    navigate("/")
  };
  return <button onClick={logOut}> Log out</button>;
};

export default Logout;
