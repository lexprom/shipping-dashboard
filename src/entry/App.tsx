import React from "react";
import LeftBar from "../containers/LeftBar";
import TradeLane from "../views/TradeLane";
import { Container } from "./styles";

const App = () => {
  return (
    <Container>
      <LeftBar />
      <TradeLane />
    </Container>
  );
};

export default App;
