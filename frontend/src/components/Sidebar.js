import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar" data-color="gray">
        <div className="sidebar-wrapper">
          <div className="logo">
            <NavLink to="/" className="simple-text">
              Weather Analyzer
            </NavLink>
          </div>
          <ul className="nav">
            <li className={this.props.location.pathname === '/' ? 'nav-item active': ''}>
                <NavLink to="/" className="nav-link">
                  <i className="nc-icon nc-chart-pie-35" />
                  <p>Dashboard</p>
              </NavLink>
            </li>
            <li className={this.props.location.pathname.startsWith('/addMeasurement') ? 'nav-item active': ''}>
              <NavLink to="/addMeasurement" className="nav-link">
                  <i className="nc-icon nc-simple-add" />
                  <p>New Measurement</p>
              </NavLink>
            </li>
            <li className={this.props.location.pathname.startsWith('/statistics') ? 'nav-item active': ''}>
            <NavLink to="/statistics" className="nav-link">
                <i className="nc-icon nc-chart-bar-32" />
                <p>Statistics</p>
              </NavLink>
            </li>
            <li>
              <a className="nav-link" href="./typography.html">
                <i className="nc-icon nc-notes" />
                <p>Reports</p>
              </a>
            </li>
            <li>
              <a className="nav-link" href="./maps.html">
                <i className="nc-icon nc-zoom-split" />
                <p>Search</p>
              </a>
            </li>
            <li>
              <a className="nav-link" href="./notifications.html">
                <i className="nc-icon nc-bell-55" />
                <p>Notifications</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
