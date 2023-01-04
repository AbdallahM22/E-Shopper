import React, { Fragment } from "react";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      {children}
    </Fragment>
  );
};

export default Layout;
