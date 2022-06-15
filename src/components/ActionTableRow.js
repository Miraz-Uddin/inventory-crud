import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ActionTableRow extends Component {
  render() {
    const obj = this.props.data;
    const urlPath = this.props.urlPath;
    if (obj.length === 0) {
      return (
        <>
          <p>No Data Found</p>
        </>
      );
    } else {
      const colHeads = Object.keys(obj[0]);
      return (
        <>
          <thead>
            <tr>
              {colHeads.map((columName, index) => {
                return (
                  <th scope="col" key={index}>
                    {columName}
                  </th>
                );
              })}
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {obj.reverse().map((item, index) => (
              <tr key={index}>
                {colHeads.map((colum, index) => {
                  return (
                    <td key={index}>
                      {item[colum]}
                    </td>
                  );
                })}
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <NavLink
                      className="btn btn-success"
                      to={`/${urlPath}/${item.id}`}
                    >
                      View
                    </NavLink>
                    <button type="button" className="btn btn-info">
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </>
      );
    }
  }
}
