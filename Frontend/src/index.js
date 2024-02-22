import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StoreProvider } from "./assets/StoreContext";

const client = new ApolloClient({
  uri: "https://ae4aaf2c-45d4-493c-8f7e-aebd70398acb-00-3mifriq68bop2.pike.replit.dev",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <StoreProvider>
      <App />
    </StoreProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
