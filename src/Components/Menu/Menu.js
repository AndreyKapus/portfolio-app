import React from "react";
import AddProject from "../AddProject/AddProject";
import FilterProjects from "../FilterProjects/FilterProjects";
import MobileMenu from "../MobileMenu/MobileMenu";
import { MenuWrapper } from "./Menu.styled";

const Menu = () => {
  return (
    <div>
      <MenuWrapper>
        <h1>Portfolio</h1>
        <AddProject />
        <FilterProjects />
      </MenuWrapper>
      <div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Menu;
