import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigator from "./components/Navigator";
import Home from "./pages/Home";
import Inventories from "./pages/Inventories";
import ContactUs from "./pages/ContactUs";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventories" element={<Inventories />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    );
  }
}
