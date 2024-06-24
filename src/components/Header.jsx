import React from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header className="sticky-top bg-light">
      <NavDesktop/>
      <NavMobile/>
    </header>
  );
};

export default Header;
