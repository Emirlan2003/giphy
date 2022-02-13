import React from "react";
import { useAuth } from "../../authContext/AuthContext";
import Gifs from "../Home/Gifs";
import Login from "../Login/Login";


const Auth = () => {
  const { user } = useAuth();
  return <div>{user ? <Gifs /> : <Login />}</div>;
};

export default Auth;
