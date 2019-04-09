import React, { Component } from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/light-bootstrap-dashboard.css?v=2.0.1";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import AddMeasurement from "./components/Measurement/AddMeasurement";
import Statistics from "./components/Measurement/Statistics";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Sidebar />
          <div className="main-panel">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/addMeasurement" component={AddMeasurement} />
              <Route path="/statistics" component={Statistics} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
