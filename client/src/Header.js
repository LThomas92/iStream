import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/">
          <img
            className="logo"
            alt="Logo"
            src={process.env.PUBLIC_URL + "./logo.png"}
          />
        </Link>
        <div className="right menu">
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

export default Header;
