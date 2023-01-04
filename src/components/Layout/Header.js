import React, { Fragment } from "react";
import Head from "./Head";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Fragment>
      <Head></Head>
      <SearchBar />
    </Fragment>
  );
};

export default Header;
