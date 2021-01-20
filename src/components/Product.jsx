import React from "react";
import { hot } from "react-hot-loader/root";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  Button,
  Image,
  Card,
  Message,
  Segment,
  Input,
} from "semantic-ui-react";

import productImages from "../assets/productImages";

const Slot = styled(Card)`
  background: transparent !important;
  box-shadow: none !important;
  > .content {
    padding: 0 !important;
  }
`;

const ProductImage = styled(Image)`
  width: auto;
  height: 50px;
  margin: 0 auto;
  > img {
    width: auto !important;
    height: 50px !important;
  }
  margin-top: 0.5em;
`;

const CardHeader = styled(Card.Header)`
  text-align: center;
  margin-top: 0.5em !important;
`;

const OpaqueInput = styled(Input)`
  opacity: 1 !important;
`;

const Product = ({ productRow, productColumn, isAdmin }) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const currentProduct = product[productRow][productColumn];
  const productCode = `${productRow + 1}${productColumn + 1}`;
  const [currentPrice, changePrice] = React.useState(currentProduct.price || 0);
  return (
    <Slot>
      <ProductImage
        src={productImages[`${productRow}${productColumn}.png`]}
        wrapped
        disabled={currentProduct.count < 1}
      />
      <Card.Content>
        <CardHeader>{`Code: ${productCode}`}</CardHeader>
        <Card.Meta>
          <Message hidden={!isAdmin} as={Segment} basic compact>
            {currentProduct.count}
          </Message>
        </Card.Meta>
        <Card.Description>
          {isAdmin ? (
            <OpaqueInput
              label={{ basic: true, content: "$" }}
              value={currentPrice}
              disabled={!isAdmin}
              fluid
              type="number"
              step="0.05"
              onChange={(ev, { value }) => {
                const numberValue = Number(value);
                if (numberValue > 0) {
                  changePrice(numberValue);
                  dispatch(
                    updatePrice({
                      row: productRow,
                      column: productColumn,
                      newPrice: numberValue,
                    })
                  );
                }
              }}
            />
          ) : (
            <Segment basic fluid textAlign="center" style={{ padding: "0" }}>
              {`$${currentPrice.toFixed(2)}`}
            </Segment>
          )}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Message hidden={!isAdmin} as={Segment} basic compact>
          <div className="ui two buttons">
            <Button
              size="mini"
              icon="plus"
              color="green"
              onClick={() =>
                dispatch(addProduct({ row: productRow, column: productColumn }))
              }
            />
            <Button
              size="mini"
              icon="minus"
              color="red"
              onClick={() =>
                dispatch(
                  removeProduct({ row: productRow, column: productColumn })
                )
              }
            />
          </div>
        </Message>
      </Card.Content>
    </Slot>
  );
};

export default hot(Product);
