import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigator from "./components/Navigator";
import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}
