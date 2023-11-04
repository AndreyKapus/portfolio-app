import React from "react";
import Menu from "./Components/Menu/Menu";
import FilterProjects from "./Components/FilterProjects/FilterProjects";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import { AppContainer } from "./App.styled";
import TestComponent from "./Components/TestComponent";

const App = () => {
  return (
    <AppContainer>
      <Menu />
      <TestComponent />
    </AppContainer>
  );
};

export default App;
