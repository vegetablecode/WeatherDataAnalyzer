import React, { Component } from "react";

class ChartCard extends Component {
  render() {
    const { measurement } = this.props;
    return (
      <tr>
        <td style={{ width: "100%" }}>
          <div>
            <b>{measurement.name}</b>
          </div>
          <div>measurement date: {measurement.date}</div>
          <div>
            information: <i title="clouds" className="fa fa-cloud" />
            <i title="sun" className="fa fa-sun-o" />
            <i title="bolt" className="fa fa-bolt" />
          </div>
        </td>
        <td className="td-actions text-right">
          <button
            type="button"
            rel="tooltip"
            title="Edit"
            className="btn btn-info btn-simple btn-link"
          >
            <i className="fa fa-eye" />
          </button>
          <button
            type="button"
            rel="tooltip"
            title="Remove"
            className="btn btn-warning btn-simple btn-link"
          >
            <i className="fa fa-wrench" />
          </button>
        </td>
      </tr>
    );
  }
}

export default ChartCard;
