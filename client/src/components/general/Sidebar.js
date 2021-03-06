// Libraries
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

// CSS
import "../../css/Sidebar.css";

// Images
import Logo from "../../resources/BrandLogo.svg";

// Context hook
import { useAuth } from "../../other/AuthContext";

export default function Sidebar({ sites, openState }) {
  const { logout, userData } = useAuth();

  useEffect(() => {
    if (openState) {
      document.querySelector(".sidebar").classList.remove("sidebar-closed");
    } else {
      document.querySelector(".sidebar").classList.add("sidebar-closed");
    }
  }, [openState]);

  return (
    <div className="sidebar">
      <header>
        <img src={Logo} alt="Brand logo" />
        <h2>Site builder</h2>
      </header>

      <ul>
        <h3>Control Panel</h3>
        <NavLink to={`/controlpanel/${userData.id}`} activeClassName="sidebar-active" exact>
          <li>
            <span className="iconify" data-inline="false" data-icon="fa-solid:hammer"></span>
            <p>Sites overview</p>
          </li>
        </NavLink>
        {sites &&
          sites.map((site) => {
            return (
              <NavLink to={`/controlpanel/${userData.id}/site/${site.id}`} activeClassName="sidebar-active" key={site.id}>
                <li>
                  <span className="iconify" data-inline="false" data-icon="ic:baseline-content-copy"></span>
                  <p>{site.title}</p>
                </li>
              </NavLink>
            );
          })}
      </ul>

      <ul>
        <h3>Profile</h3>
        <li onClick={logout}>
          <span className="iconify" data-inline="false" data-icon="ic:twotone-log-out"></span>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
}
