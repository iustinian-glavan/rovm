import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";
import { Segment } from "semantic-ui-react";

const Screen = styled(Segment)`
  font-family: "Open24";
  color: orange !important;
  background: #000;
  width: 100px;
  height: 50px;
  margin: 0.5em auto !important;
`;

const Display = ({ text }) => {
  return (
    <Screen inverted textAlign="center">
      {text}
    </Screen>
  );
};

export default hot(Display);
