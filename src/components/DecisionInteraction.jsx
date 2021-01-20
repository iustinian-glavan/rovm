import React from "react";
import { hot } from "react-hot-loader/root";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";

import { removeCredit } from "../store/credit";
import { removeProduct } from "../store/product";

const DecisionInteraction = ({
  payedChange,
  updatePayedChange,
  availableCredit,
  selectedProductCode,
  updateCode,
  updatePurchasedProducts,
  purchasedProducts,
}) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const [row, column] = selectedProductCode.split("").map((i) => +i - 1);

  const isInStock = () => {
    return product[row][column].count > 0;
  };

  const isValid = () => {
    return row < product.length && column < product[row]?.length;
  };

  const productPrice = () => {
    return product[row][column].price ?? 0;
  };

  return (
    <Button.Group widths="3" color="orange" inverted>
      <Button
        content="Change"
        onClick={() => {
          // TODO: if VendingMachine unable to pay change in full
          // then it should pay the change amount as a printed QR code or some form of voucher
          if (availableCredit) {
            updatePayedChange(payedChange + availableCredit);
            dispatch(
              removeCredit({
                value: availableCredit,
                operation: "change",
              })
            );
          }
        }}
      />
      <Button
        content="Cancel"
        onClick={() => {
          updateCode("");
        }}
      />
      <Button
        content="Pay"
        onClick={() => {
          if (isValid()) {
            if (isInStock()) {
              const price = productPrice();
              if (availableCredit >= price) {
                dispatch(
                  removeCredit({
                    value: price,
                    operation: "payment",
                  })
                );
                dispatch(removeProduct({ row, column }));
                updateCode("");
                updatePurchasedProducts([
                  ...purchasedProducts,
                  `#${selectedProductCode}`,
                ]);
              } else {
                updateCode("INSUFFICIENT CREDIT");
              }
            } else {
              updateCode("NOT IN STOCK");
            }
          } else {
            updateCode("INVALID CODE");
          }
        }}
      />
    </Button.Group>
  );
};

export default hot(DecisionInteraction);
