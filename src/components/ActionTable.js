import React, { Component } from "react";
import ActionTableRow from "../components/ActionTableRow.js";
import { NavLink } from "react-router-dom";

export default class ActionTable extends Component {
  render() {
    const data = this.props.data;
    const urlPath = this.props.urlPath;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="p-5 position-relative">
                <h3 className="text-center">
                  {urlPath.charAt(0).toUpperCase() + urlPath.slice(1)} List
                </h3>
                <div
                  className="position-absolute"
                  style={{
                    right: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <NavLink className="btn btn-primary" to={`/${urlPath}/create`}>
                    Add New (+)
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 m-auto">
              <div className="table-responsive">
                <table className="table table-hover">
                  <ActionTableRow data={data} key={data.id} urlPath={urlPath} />
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
