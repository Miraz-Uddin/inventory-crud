import React from "react";
import ActionTable from "../components/ActionTable";
import { useState } from "react";

const Inventories = (props) => {
  const [allValues, setAllValues] = useState({
    items: props.items ?? [],
    url: "",
  });

  React.useEffect(() => {
    setAllValues({ items: props.items, url: props.urlPath });
  },[]);

  const { items, url } = allValues;

  if (items.length !== 0) {
    const data = items;
    const urlPath = url;
    return <>{<ActionTable data={data} urlPath={urlPath} />}</>;
  }
};

export default Inventories;
