import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
cartTotalQuantity:0,
cartTotalAmount:0,
previousURL: "",
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
        Add_To_Cart(state,action){
            console.log(action.payload);
            const productIndex = state.cartItems.findIndex(
              (item) => item.id === action.payload.id
            );
            // console.log(productIndex);

            if (productIndex >= 0) {
              // Item already exists in the cart
              // Increase the cartQuantity
              state.cartItems[productIndex].cartQuantity += 1;
              toast.info(`${action.payload.name} increased by one`, {
                position: "top-left",
              });
            } else {
              // Item doesn't exists in the cart
              // Add item to the cart
              const tempProduct = { ...action.payload, cartQuantity: 1 };
              state.cartItems.push(tempProduct);
              toast.success(`${action.payload.name} added to cart`, {
                position: "top-left",
              });
            }

            // save cart to LS
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },


        Decrease_Cart(state, action) {
          console.log(action.payload);
          const productIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
          if(state.cartItems[productIndex].cartQuantity > 1){
            state.cartItems[productIndex].cartQuantity -= 1;
            toast.info(`${action.payload.name} decreased by one`, {
              position: "top-left",
            });
          }else if(state.cartItems[productIndex].cartQuantity === 1){
              const newCartItem = state.cartItems.filters((item) => item.id !== action.payload.id )
              state.cartItems = newCartItem;
              toast.success(`${action.payload.name} removed from cart`, {
                position: "top-left",
              });
          }
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        Remove_From_Cart(state, action) {
          const newCartItem = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
    
          state.cartItems = newCartItem;
          toast.success(`${action.payload.name} removed from cart`, {
            position: "top-left",
          });
    
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        Clear_Cart(state, action) {
          state.cartItems = [];
          toast.info(`Cart cleared`, {
            position: "top-left",
          });
    
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        Calculate_Subtotal(state, action) {
          const array = [];
          state.cartItems.map((item) => {
            const { price, cartQuantity } = item;
            const cartItemAmount = price * cartQuantity;
            return array.push(cartItemAmount);
          });
          const totalAmount = array.reduce((a, b) => {
            return a + b;
          }, 0);
          state.cartTotalAmount = totalAmount;
        },
        Calculate_Total_quantity(state, action) {
          const array = [];
          state.cartItems.map((item) => {
            const { cartQuantity } = item;
            const quantity = cartQuantity;
            return array.push(quantity);
          });
          const totalQuantity = array.reduce((a, b) => {
            return a + b;
          }, 0);
          state.cartTotalQuantity = totalQuantity;
        },
        SAVE_URL(state, action) {
          console.log(action.payload);
          state.previousURL = action.payload;
        },
  }
});

export const {Add_To_Cart,Decrease_Cart,Remove_From_Cart,Clear_Cart,Calculate_Subtotal,Calculate_Total_quantity,SAVE_URL} = cartSlice.actions
export const selectCartItems = (state) =>state.cart.cartItems;
export const selectCartTotalQuantity = (state) =>state.cart.cartTotalQuantity;
export const selectCartTotalAmount = (state) =>state.cart.cartTotalAmount;
export const selectPreviousURL = (state) => state.cart.previousURL;
export default cartSlice.reducer