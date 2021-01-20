import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";
import GlobalFonts from "./assets/fonts/fonts";
import { useSelector } from "react-redux";

import { Grid, Container, Checkbox, Button, Segment } from "semantic-ui-react";

import ChangeBox from "./components/ChangeBox";
import MoneyInput from "./components/MoneyInput";
import DecisionInteraction from "./components/DecisionInteraction";
import Display from "./components/Display";
import Numpad from "./components/Numpad";
import ProductRow from "./components/ProductRow";

import { productSlots } from "./config";

const VMGrid = styled(Grid)`
  background: linear-gradient(-80deg, #0083b0, #00b4db);
`;

const GlassCase = styled(Grid)`
  background: rgba(255, 255, 255, 0.5);
  background: linear-gradient(
    315deg,
    rgba(255, 255, 255, 0.75) 50%,
    rgba(255, 255, 255, 0.66) 50%
  );
`;

const VendingMachine = () => {
  const [configMode, toggleConfigMode] = React.useState(false);
  const [payedChange, setPayedChange] = React.useState(0);
  const [purchasedProducts, setPurchasedProducts] = React.useState([]);
  const [displayMessage, setDisplayMessage] = React.useState("NO CREDIT");

  const { credit } = useSelector((state) => state.credit);
  return (
    <>
      <GlobalFonts />
      <VMGrid celled centered container>
        <Grid.Row centered>
          <Grid.Column width={12}>
            <Container fluid>
              <GlassCase celled centered columns="equal">
                {productSlots.map((row, index) => (
                  <Grid.Row key={`row${index}`}>
                    <ProductRow
                      rowIndex={index}
                      slotCount={row.slots}
                      isAdmin={configMode}
                    ></ProductRow>
                  </Grid.Row>
                ))}
              </GlassCase>
            </Container>
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid celled centered>
              <Grid.Row centered>
                <Grid celled centered>
                  <Grid.Row centered>
                    <Display text={displayMessage} />
                  </Grid.Row>
                  <Grid.Row centered>
                    <Numpad
                      currentCode={displayMessage}
                      updateCode={setDisplayMessage}
                    ></Numpad>
                  </Grid.Row>
                  <Grid.Row centered>
                    <DecisionInteraction
                      payedChange={payedChange}
                      updatePayedChange={setPayedChange}
                      availableCredit={credit.value}
                      updateCode={setDisplayMessage}
                      selectedProductCode={displayMessage}
                      updatePurchasedProducts={setPurchasedProducts}
                      purchasedProducts={purchasedProducts}
                    />
                  </Grid.Row>
                </Grid>
              </Grid.Row>
              <Grid.Row centered>
                <Grid celled centered>
                  <Grid.Row centered>
                    <Display
                      text={`$${+((credit.value * 100) / 100).toFixed(2)}`}
                    />
                  </Grid.Row>
                  <Grid.Row centered>
                    <MoneyInput
                      displayMessage={displayMessage}
                      updateMessage={setDisplayMessage}
                    ></MoneyInput>
                  </Grid.Row>
                </Grid>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={12} style={{ textAlign: "center" }}>
            <Button
              onClick={() => {
                setPurchasedProducts([]);
              }}
              style={{ margin: "1em" }}
            >{`Collect purchased items: [${purchasedProducts.join(
              ","
            )}]`}</Button>
          </Grid.Column>
          <Grid.Column width={4} style={{ textAlign: "center" }}>
            <ChangeBox
              updatePayedChange={setPayedChange}
              payedChange={payedChange}
            />
          </Grid.Column>
        </Grid.Row>
      </VMGrid>
      <Segment padded="very" style={{ marginBottom: "1em" }}>
        <Checkbox
          label="Configuration mode"
          onChange={() => {
            toggleConfigMode(!configMode);
          }}
          checked={configMode}
        />
      </Segment>
    </>
  );
};

export default hot(VendingMachine);
