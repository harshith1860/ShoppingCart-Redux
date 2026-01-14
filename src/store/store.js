// configureStore is a helper function provided by Redux Toolkit
// It is used to create the Redux store with good default settings
import { configureStore } from "@reduxjs/toolkit";

// Import the cart reducer (slice reducer) which contains
// cart-related state and logic (add, remove, total, etc.)
import { cartReducer } from "./cartSlice";

// Create the Redux store
export const store = configureStore({

  // reducer object defines how the global Redux state is structured
  reducer: {

    // cartState is the key/name of this slice in the global store
    // cartReducer handles all updates related to cartState
    cartState: cartReducer,
  }
});
