import React from "react";
import { hot } from "react-hot-loader/root";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";

import { acceptedCoins, acceptedBills } from "../config";
import { addCredit } from "../store/credit";

const MoneyInput = ({ updateMessage }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Button.Group widths={`${acceptedCoins.length}`} color="orange" inverted>
        {acceptedCoins.map((coin, index) => (
          <Button
            key={`coin-${index}`}
            onClick={() => {
              dispatch(addCredit({ value: coin.value }));
              if (["NO CREDIT", ""].includes(displayMessage)) {
                updateMessage("INSERT CODE");
              }
            }}
          >
            {coin.display}
          </Button>
        ))}
      </Button.Group>
      <Button.Group widths={`${acceptedBills.length}`} color="orange" inverted>
        {acceptedBills.map((bill, index) => (
          <Button
            key={`bill-${index}`}
            onClick={() => {
              dispatch(addCredit({ value: bill.value }));
            }}
          >
            {bill.display}
          </Button>
        ))}
      </Button.Group>
    </>
  );
};

export default hot(MoneyInput);
