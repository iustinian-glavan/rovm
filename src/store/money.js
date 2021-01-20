import { createSlice, current } from "@reduxjs/toolkit";
import { acceptedBills, acceptedCoins } from "../config";

const moneyValues = Object.fromEntries([
  ...acceptedCoins,
  ...acceptedBills,
]).map((i) => Object.assign({ count: 2 }, Object.values(i)));

// Slice
const slice = createSlice({
  name: "money",
  initialState: {
    ...moneyValues,
  },
  reducers: {
    // TODO reducers for moneyAdd & moneyRemove
  },
});

export default slice.reducer;

// TODO Actions
