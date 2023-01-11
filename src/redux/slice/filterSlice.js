import { createSlice } from '@reduxjs/toolkit'

const initialState = {
filteredProducts: [],
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    Filter_By_Search(state,action){
        const {products,search} = action.payload;
        console.log(action.payload);
        const tempProducts = products.filter(
          (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      );
          console.log(tempProducts);
          state.filteredProducts = tempProducts;


    },
    Filter_By_Sort(state,action){
        console.log(action.payload);
        const {products,sort} = action.payload;
        let tempProducts = [];
            if(sort === "latest"){
                tempProducts = products;
            }
            if (sort === "lowest-price") {
                tempProducts = products.slice().sort((a, b) => {
                return a.price - b.price;
                });
            }
            if (sort === "highest-price") {
                tempProducts = products.slice().sort((a, b) => {
                  return b.price - a.price;
                });
              }
              if (sort === "a-z") {
                tempProducts = products.slice().sort((a, b) => {
                  return a.name.localeCompare(b.name);
                });
              }
              if (sort === "z-a") {
                tempProducts = products.slice().sort((a, b) => {
                  return b.name.localeCompare(a.name);
                });
              }

        state.filteredProducts = tempProducts
    },
    Filter_By_Category(state, action) {
        const { products, category } = action.payload;
        let tempProducts = [];
        if (category === "All") {
          tempProducts = products;
        } else {
          tempProducts = products.filter(
            (product) => product.category === category
          );
        }
        state.filteredProducts = tempProducts;
      },

      Filter_By_Brand(state, action) {
        const { products, brand } = action.payload;
        let tempProducts = [];
        if (brand === "All") {
          tempProducts = products;
        } else {
          tempProducts = products.filter((product) => product.brand === brand);
        }
        state.filteredProducts = tempProducts;
     
      },
      Filter_By_Price(state, action) {
        const { products, price } = action.payload;
        let tempProducts = [];
       
          tempProducts = products.filter((product) => product.price <= price);
      
        state.filteredProducts = tempProducts;
     
      },
  }
});

export const {Filter_By_Search,Filter_By_Sort,Filter_By_Category,Filter_By_Brand,Filter_By_Price} = filterSlice.actions
export const selectFilterProducts = (state) => state.filter.filteredProducts;
export default filterSlice.reducer