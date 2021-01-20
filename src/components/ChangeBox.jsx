import React from "react";
import { hot } from "react-hot-loader/root";
import { Button } from "semantic-ui-react";

const ChangeBox = ({ payedChange, updatePayedChange }) => {
  return (
    <Button
      style={{ margin: "1em" }}
      onClick={() => {
        updatePayedChange(0);
      }}
    >{`Collect change: $${+((payedChange * 100) / 100).toFixed(2)}`}</Button>
  );
};

export default hot(ChangeBox);
