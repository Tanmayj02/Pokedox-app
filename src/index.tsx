import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*
BOOTSTRAP
*/
// import "react-bootstrap/dist";
import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line import/order
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import { fetchPokemons } from "./Redux/ReduxSlice/PokemonSlice";

store.dispatch(fetchPokemons());

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
