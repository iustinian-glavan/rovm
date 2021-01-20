import React from "react";
import { hot } from "react-hot-loader/root";
import { Grid } from "semantic-ui-react";

import Product from "./Product";

const ProductRow = ({ rowIndex, slotCount, isAdmin }) => {
  const Row = [];
  for (let i = 0; i < slotCount; i++) {
    Row.push(
      <Grid.Column key={`slot${rowIndex}${i}`}>
        <Product
          key={`product${rowIndex}${i}`}
          productRow={rowIndex}
          productColumn={i}
          isAdmin={isAdmin}
        ></Product>
      </Grid.Column>
    );
  }
  return <>{Row}</>;
};

export default hot(ProductRow);
