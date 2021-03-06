import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import Navigator from "./components/Navigator";
import Home from "./pages/Home";
import Inventories from "./pages/Inventories";
import ContactUs from "./pages/ContactUs";
import SingleView from "./components/SingleView";
import AddForm from "./components/AddForm";

const App = () => {
  const [inventories, setInventories] = useState({
    inventories: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:4001/inventories")
      .then(({ data }) => {
        setInventories({
          ...inventories,
          inventories: data,
        });
      })
      .catch((error) => console.log({ error }));
  },[]);

  return (
    <Router>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/inventories/create"
          element={<AddForm urlPath={"inventories"} />}
        />
        <Route
          path="/inventories/:id"
          element={
            <SingleView items={inventories} removeKey={["id", "thumbnail"]} />
          }
        />
        <Route
          path="/inventories"
          element={<Inventories items={inventories} urlPath={"inventories"} />}
        />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
