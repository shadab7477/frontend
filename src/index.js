import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import {AuthProvider} from "./Authcontext.js"
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import store from "./store.js"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter hashType="noslash">

    <Provider store={store}>
    <App />
    </Provider>

    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

