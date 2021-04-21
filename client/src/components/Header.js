import React from 'react';

const Header = (props) => {
  return <h1>{props.title || "No title given"}</h1>;
};

export default Header;