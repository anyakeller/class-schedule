import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PageData, PageOrder } from "../utils/PageData";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Fior Di Latte
        </Link>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          type="button"
          data-bs-target="#navbar-collapse-content"
          aria-controls="navbar-collapse-content"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-collapse-content">
          <div className="navbar-nav">
            {PageOrder.map((path, index) => {
              const page = PageData[path];
              return (
                <NavLink
                  exact
                  to={page.pathname}
                  className="nav-link"
                  activeClassName="active"
                  key={index}>
                  {page.pageHeader}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
