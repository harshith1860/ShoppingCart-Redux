Redux – Simple Explanation (Compared with Context + useReducer)

Redux is almost similar to useContext + useReducer, but it is designed for large-scale applications.

The main difference is:

Redux has a central store

All global data is stored and managed in one place

Any component can access or update this data without prop drilling

🔹 Core Concepts in Redux
1️⃣ Store

The store is the central place where the entire application state is stored.

We usually create it in a separate file
Example: store.js (name is NOT mandatory)

Store Example
// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

export const store = configureStore({
reducer: {
cartState: cartReducer
}
});

👉 The store:

Holds global state

Knows which reducer handles which part of the state

2️⃣ Slice

A slice is a part of the Redux state related to one functionality.

Examples:

cartSlice.js → Cart related logic

locationSlice.js → Location related logic

authSlice.js → Authentication related logic

👉 We create separate slices based on functionality.

3️⃣ What a Slice Contains

Each slice contains:

Initial State

Reducers (functions that update state)

Actions (auto-generated)

Reducer function (exported to register in store)

Slice Example
// store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
name: "cart",
initialState: {
cartList: [],
total: 0
},
reducers: {
add(state, action) {
state.cartList.push(action.payload);
state.total += action.payload.price;
},
remove(state, action) {
state.cartList = state.cartList.filter(
item => item.id !== action.payload.id
);
state.total -= action.payload.price;
}
}
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

4️⃣ Registering Redux in React App

We wrap the application with Provider so that Redux store is available to all components.

// index.js
import { Provider } from "react-redux";
import { store } from "./store/store";

<Provider store={store}>
  <App />
</Provider>

👉 App and all its children can now access Redux state.

🔹 Using Redux Inside Components
Step 1️⃣ useDispatch

Used to send actions to Redux store.

const dispatch = useDispatch();

Step 2️⃣ useSelector

Used to read data from Redux store.

const cartItems = useSelector(state => state.cartState.cartList);

👉 Here:

state = entire Redux store

cartState = key used in store

cartList = value inside the slice

Step 3️⃣ Dispatch Actions
dispatch(add(product)); // Add product to cart
dispatch(remove(product)); // Remove product from cart

🔁 Redux Flow (Simple Words)

Component dispatches an action

Action goes to slice reducer

Reducer updates the state

Store updates

Components using useSelector re-render automatically

🧠 Redux vs Context + useReducer (Quick Comparison)
Feature Context + useReducer Redux
Global state Yes Yes
Central store ❌ No ✅ Yes
DevTools ❌ Limited ✅ Powerful
Large apps ❌ Hard to manage ✅ Recommended
Middleware ❌ No ✅ Yes
📋 Redux Terminology Table
Term Description
store Central place where all global state is stored
slice A logical part of the state (cart, auth, etc.)
reducer Function that updates state
action Object that tells reducer what to do
useDispatch Sends actions to Redux store
useSelector Reads data from Redux store
Provider Makes store available to React components
configureStore Creates Redux store
createSlice Creates slice with reducers & actions

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
