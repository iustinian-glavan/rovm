import React from "react";
import { hot } from "react-hot-loader/root";
import { Grid, Button } from "semantic-ui-react";

const Numpad = ({ currentCode, updateCode }) => {
  const digits = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <Grid columns="equal" centered style={{ margin: "0" }}>
      {digits.map((dRow, index) => (
        <Grid.Row key={`digitRow-${index}`}>
          {dRow.map((digit, index) => (
            <Grid.Column key={`digitCell-${index}`}>
              <Button
                onClick={() => {
                  if (currentCode.length < 2) {
                    updateCode(`${currentCode}${digit}`);
                  } else {
                    if (currentCode.length > 2) {
                      updateCode(`${digit}`);
                    }
                  }
                }}
              >
                {digit}
              </Button>
            </Grid.Column>
          ))}
        </Grid.Row>
      ))}
    </Grid>
  );
};

export default hot(Numpad);
