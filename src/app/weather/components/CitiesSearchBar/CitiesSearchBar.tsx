import React from "react";
import { Search } from "semantic-ui-react";
import "./search-bar.scss";

const CitiesSearchBar: React.FC = () => {
  return <Search placeholder={"Search a city..."} size="small" id="search-bar" />;
};

export default CitiesSearchBar;
