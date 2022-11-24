import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"
import "./styles/main.scss";
import store from './store.js'
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: 'https://www.dnd5eapi.co/graphql',
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />          
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);