import React from 'react';
import ReactDOM from 'react-dom/client';

// Provider is a component from react-redux
// It makes the Redux store available to all child components
import { Provider } from "react-redux";

// Import the Redux store created using configureStore
import { store } from './store/store';

import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    {/* 
      Provider wraps the application and injects the Redux store.
      Any component inside App can:
      - read data from the Redux store (useSelector)
      - update data using actions (useDispatch)
    */}
    <Provider store={store}>
      <Router>
        {/* App acts only as a consumer of Redux store */}
        <App />

      </Router>

    </Provider>

  </React.StrictMode>
);
