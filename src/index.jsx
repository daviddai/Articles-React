import App from "./components/App.jsx";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store/index";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app")
);