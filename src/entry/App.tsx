import React, { useEffect } from "react";
import LeftBar from "../containers/LeftBar";
import { useAppDispatch } from "../store";
import { fetchPorts } from "../store/tradeLane/tradeLaneSlice";
import TradeLane from "../views/TradeLane";
import { Container } from "./styles";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPorts());
  }, []);

  return (
    <Container>
      <LeftBar />
      <TradeLane />
    </Container>
  );
};

export default App;
