import React, { Component } from "react";
import ChartCard from "./Measurement/ChartCard";

class Dashboard extends Component {
  render() {
    const measurement = {
      name: "Wroclaw",
      date: "20.02.2019"
    }
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="card  card-tasks">
                <div className="card-header ">
                  <h4 className="card-title">Stations</h4>
                  <p className="card-category">New stations</p>
                </div>
                <div className="card-body ">
                  <div className="table-full-width">
                    <table className="table">
                      <tbody>
                      <ChartCard key={1} measurement={measurement} />
                      <ChartCard key={2} measurement={measurement} />
                      <ChartCard key={3} measurement={measurement} />
                      <ChartCard key={4} measurement={measurement} />
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="now-ui-icons loader_refresh spin" /> Updated 3 minutes ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card  card-tasks">
                <div className="card-header ">
                  <h4 className="card-title">Measurements</h4>
                  <p className="card-category">List of new measurements</p>
                </div>
                <div className="card-body ">
                  <div className="table-full-width">
                    <table className="table">
                      <tbody>
                      <ChartCard key={1} measurement={measurement} />
                      <ChartCard key={2} measurement={measurement} />
                      <ChartCard key={3} measurement={measurement} />
                      <ChartCard key={4} measurement={measurement} />
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="now-ui-icons loader_refresh spin" /> Updated 3 minutes ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card  card-tasks">
                <div className="card-header ">
                  <h4 className="card-title">Rivers etc</h4>
                  <p className="card-category">Whatever</p>
                </div>
                <div className="card-body ">
                  <div className="table-full-width">
                    <table className="table">
                      <tbody>
                      <ChartCard key={1} measurement={measurement} />
                      <ChartCard key={2} measurement={measurement} />
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="now-ui-icons loader_refresh spin" /> Updated 3 minutes ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
