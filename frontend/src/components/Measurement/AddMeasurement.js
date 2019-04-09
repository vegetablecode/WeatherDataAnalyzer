import React, { Component } from "react";

class AddMeasurement extends Component {
  state = {
    serviceAgreement: "true"
  };

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Add new measurement</h3>
                </div>
                <div className="card-body">
                  <form>
                    <div />
                    <hr />
                    <h4>Station</h4>
                    <div className="col-md-12">
                      <div className="md-12 pr-1">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            className="form-control"
                            disabled=""
                            placeholder=""
                            value=""
                          />
                        </div>
                      </div>
                      <div className="md-12 pr-1">
                        <div className="form-group">
                          <label>Latitude</label>
                          <input
                            type="text"
                            className="form-control"
                            disabled=""
                            placeholder=""
                            value=""
                          />
                        </div>
                      </div>
                      <div className="md-12 pr-1">
                        <div className="form-group">
                          <label>Longitude</label>
                          <input
                            type="text"
                            className="form-control"
                            disabled=""
                            placeholder=""
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h4>Measurement</h4>
                    <div className="col-md-12">
                      <div className="md-4 pr-1">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            className="form-control"
                            disabled=""
                            placeholder=""
                            value=""
                          />
                        </div>
                      </div>
                      <div className="md-4 pr-1">
                        <div className="form-group">
                          <label>Latitude</label>
                          <input
                            type="text"
                            className="form-control"
                            disabled=""
                            placeholder=""
                            value=""
                          />
                        </div>
                      </div>
                      <div className="md-4 pr-1">
                        <div className="form-group">
                          <label>Longitude</label>
                          <input
                            type="text"
                            className="form-control"
                            disabled=""
                            placeholder=""
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info btn-fill pull-right"
                    >
                      Submit
                    </button>
                    <div className="clearfix" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMeasurement;
