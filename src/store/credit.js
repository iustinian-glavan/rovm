import { createSlice, current } from "@reduxjs/toolkit";

// Slice
const slice = createSlice({
  name: "credit",
  initialState: {
    credit: { value: 0 },
  },
  reducers: {
    creditAdded: (state, action) => {
      const { value } = action.payload;
      const creditStateClone = Object.assign({}, current(state.credit));
      creditStateClone.value += value;
      return Object.assign({}, state, { credit: creditStateClone });
    },
    creditRemoved: (state, action) => {
      const { value, operation } = action.payload;
      const creditStateClone = Object.assign({}, current(state.credit));
      if (value > creditStateClone.value && operation === "payment") {
        return state;
      }
      creditStateClone.value =
        operation === "change" ? 0 : creditStateClone.value - value;
      return Object.assign({}, state, { credit: creditStateClone });
    },
  },
});

export default slice.reducer;

// Actions
const { creditAdded, creditRemoved } = slice.actions;

export const addCredit = ({ value }) => (dispatch) => {
  try {
    dispatch(creditAdded({ value }));
  } catch (err) {
    return console.error(err.message);
  }
};

export const removeCredit = ({ value, operation }) => (dispatch) => {
  try {
    return dispatch(creditRemoved({ value, operation }));
  } catch (err) {
    return console.error(err.message);
  }
};
