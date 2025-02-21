import { useState } from 'react';
import React from "react";
import './App.css';
import SignUpForm from "./components/Authenticate";
import Authenticate from "./components/SignUpForm";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  )
}

export default App
