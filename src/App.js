import React from "react";
import { Container } from "react-bootstrap"

import './App.css';

import SignUp from "./Components/SignUp";
import Header from "./Components/Header";
import Whiteboard from "./Components/Whiteboard";

const App = () => {
  return(
    <Container className="d-flex align-items-center justify-content-center">
      <div>
        {/* <SignUp /> */}
        {/* <Header /> */}
        <Whiteboard />
      </div>
    </Container>
  )
};

export default App;