import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const AuthContex = createContext();

const AuthContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(undefined);

  const getLoggedIn = async () => {
    const loggedInRes = await axios.get("http://localhost:5001/auth/loggedin");
    setLoggedIn(loggedInRes.data);
  }
  useEffect(() =>{
    getLoggedIn();
  },[]);

return <AuthContex.Provider value={{loggedIn, getLoggedIn}}>
    {props.children}
     </AuthContex.Provider>

}
export default AuthContex;
export { AuthContextProvider };