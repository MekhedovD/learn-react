import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPosts, subscribe, updateNewPostText } from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import state from "./redux/state";
// import { renderEntireTree } from "./render";
import * as serviceWorker from "./serviceWorker";
 
 let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPosts={addPosts} updateNewPostText={updateNewPostText} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(state);
subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
