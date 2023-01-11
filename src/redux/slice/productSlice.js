import { createSlice } from '@reduxjs/toolkit'

const initialState = {
products:[],
minPrice: null,
maxPrice: null,
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    Store_Products:(state,action) => {
        // console.log(action.payload);
       state.products = action.payload.products;
    },
    Get_Price_Range(state, action) {
      const { products } = action.payload;
      const array = [];
      products.map((product) => {
        const price = product.price;
        return array.push(price);
      });
      const max = Math.max(...array);
      const min = Math.min(...array);

      state.minPrice = min;
      state.maxPrice = max;
    },
  }
});

export const {Store_Products,Get_Price_Range} = productSlice.actions
export const selectProducts = (state) => state.product.products;
export const selectMinPrice = (state) => state.product.minPrice;
export const selectMaxPrice = (state) => state.product.maxPrice;
export default productSlice.reducer