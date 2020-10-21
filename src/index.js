import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: "Hello! How are you", likeCount: 12},
  { id: 2, message: 'It\'s my first post', likeCount: 20},
];

let dialogs = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Olya" },
  { id: 3, name: "Sasha" },
  { id: 4, name: "Valera" },
  { id: 5, name: "Vika" },
  { id: 6, name: "Ulya" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you" },
  { id: 3, message: "Ok" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
