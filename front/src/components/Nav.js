import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="jumbotron text-center">
      <h2>Welcome to Micro-blog</h2>
      <p className="container lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio soluta
        ut neque, dolorem sunt quia accusantium.
      </p>
      <ul className="nav nav-bar justify-content-center">
        <li className="nav-item">
          <Link className="btn btn-outline-secondary m-2" to="/">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-outline-secondary m-2" to="/new">
            Add a Post
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
