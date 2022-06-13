import React, { Component } from "react";
import ActionTable from "../components/ActionTable";

export default class Inventories extends Component {
  state = {
    items: [],
    urlPath: "",
  };
  componentDidMount() {
    this.setState({
      items: this.props.items,
      urlPath: this.props.urlPath,
    });
  }
  render() {
    if (this.state.items.length !== 0) {
      const data = this.state.items;
      const urlPath = this.state.urlPath;
      return <>{<ActionTable data={data} urlPath={urlPath} />}</>;
    }
  }
}
