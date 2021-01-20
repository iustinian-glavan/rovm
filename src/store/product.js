import { createSlice, current } from "@reduxjs/toolkit";
import { productSlots } from "../config";

const cloneProductsArray = (items) =>
  items.map((item) =>
    Array.isArray(item) ? cloneProductsArray(item) : Object.assign({}, item)
  );

// Slice
const slice = createSlice({
  name: "product",
  initialState: {
    product: productSlots.map((columnCount, rowIndex) => {
      const row = [];
      for (let i = 0; i < columnCount.slots; i++) {
        row.push({
          name: productSlots.type,
          count: 2,
          code: `${rowIndex + 1}${i + 1}`,
          price: 0.5,
          max: productSlots.max,
        });
      }
      return row;
    }),
  },
  reducers: {
    productAdded: (state, action) => {
      const productStateClone = cloneProductsArray(current(state.product));
      const { row, column } = action.payload;
      if (
        productStateClone[row][column].count ===
        productStateClone[row][column].max
      ) {
        return state;
      }
      productStateClone[row][column].count += 1;
      return Object.assign({}, state, { product: productStateClone });
    },
    productRemoved: (state, action) => {
      const productStateClone = cloneProductsArray(current(state.product));
      const { row, column } = action.payload;
      if (productStateClone[row][column].count < 1) {
        return state;
      }
      productStateClone[row][column].count -= 1;
      return Object.assign({}, state, { product: productStateClone });
    },
    productPriceUpdated: (state, action) => {
      const productStateClone = cloneProductsArray(current(state.product));
      const { row, column, newPrice } = action.payload;
      productStateClone[row][column].price = newPrice;
      return Object.assign({}, state, { product: productStateClone });
    },
  },
});

export default slice.reducer;

// Actions
const { productAdded, productRemoved, productPriceUpdated } = slice.actions;

export const addProduct = ({ row, column }) => (dispatch) => {
  try {
    dispatch(productAdded({ row, column }));
  } catch (err) {
    return console.error(err.message);
  }
};

export const removeProduct = ({ row, column }) => (dispatch) => {
  try {
    return dispatch(productRemoved({ row, column }));
  } catch (err) {
    return console.error(err.message);
  }
};

export const updatePrice = ({ row, column, newPrice }) => (dispatch) => {
  try {
    dispatch(productPriceUpdated({ row, column, newPrice }));
  } catch (err) {
    return console.error(err.message);
  }
};
