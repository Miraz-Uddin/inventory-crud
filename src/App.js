import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import Navigator from "./components/Navigator";
import Home from "./pages/Home";
import Inventories from "./pages/Inventories";
import ContactUs from "./pages/ContactUs";
import SingleView from "./components/SingleView";
import AddForm from "./components/AddForm";

export default class App extends Component {
  state = {
    inventories: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:4001/inventories")
      .then(({ data }) => {
        return this.setState({
          inventories: data,
        });
      })
      .catch((error) => console.log({ error }));
  }
  render() {
    const items = this.state.inventories;
    return (
      <Router>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/inventories/create"
            element={<AddForm items={items} />}
          />
          <Route
            path="/inventories/:id"
            element={
              <SingleView items={items} removeKey={["id", "thumbnail"]} />
            }
          />
          <Route
            path="/inventories"
            element={<Inventories items={items} urlPath={"inventories"} />}
          />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    );
  }
}
