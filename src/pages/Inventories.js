import React from "react";
import ActionTable from "../components/ActionTable";

const Inventories = (props) => {
  if (props.items.length !== 0) {
    return (
      <>
        {<ActionTable data={props.items.inventories} urlPath={props.urlPath} />}
      </>
    );
  } else {
    return <></>;
  }
};

export default Inventories;
