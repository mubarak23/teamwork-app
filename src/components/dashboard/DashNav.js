import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStickyNote,
  faImage,
  faFolderMinus
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
//import Dashboard from './Dashboard'

const DashNav = () => {
  return (
    <div className="dashboard-tabber">
      <div className="nav">
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink
              exact
              to="/dashboard/"
              className="nav-link"
              activeClassName="activeRoute"
            >
              <FontAwesomeIcon icon={faFolderMinus} size="2x" />
              <span>My feed</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashNav;
