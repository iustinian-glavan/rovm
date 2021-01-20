import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";

const GlassCase = styled.div`
  width: 300px;
  height: 260px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  margin-top: 40px;
  padding-top: 10px;
  padding-left: 50px;
  -webkit-border-color: 15px;
  -moz-border-color: 15px;
  -ms-border-color: 15px;
  -o-border-color: 15px;
  border-color: 15px;
  color: white;
  font-weight: bolder;
  -webkit-box-shadow: inset -4px -4px rgba(0, 0, 0, 0.5);
  box-shadow: inset -4px -4px rgba(0, 0, 0, 0.5);
  font-size: 18px;
`;

class MerchandiseCase extends React.Component {
  render() {
    return (
      <GlassCase>
      </GlassCase>
    );
  }
}

export default hot(MerchandiseCase);
