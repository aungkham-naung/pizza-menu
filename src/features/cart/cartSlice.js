import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //pushing the item to cart array
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //delete item takes in id
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
      //delete item that is the same as the id
    },
    increaseQuantity(state, action) {
      //find item that with the payload's id
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const totalCartQuantity = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);
export const totalCartPrice = (state) =>
  state.cart.cart.reduce((total, item) => total + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

//finding if the pizza exists in the cart
//takes in an id ==> create another function where the function goes the cart looking for item with the given id
//if that item exists ==> returns quantity
//else the function becomes undefined/null ==> returns 0
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0; //function helps us to check the current quantity of an item based on its id in the cart
