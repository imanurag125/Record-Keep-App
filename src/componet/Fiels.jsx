import React from "react";
import Button from "@mui/material/Button";
function Fiels(props) {
  // console.log(props);
  return (
    <div className="data">
      <div className="data_val">
        <h4>{props.name}</h4>
        <h4>{props.email}</h4>
        <Button
          onClick={() => props.handleDelete(props.id)}
          variant="contained"
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

export default Fiels;
