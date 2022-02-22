import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, minus.",
    liksCount: 12,
  },
  {
    id: 2,
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, ullam nostrum!",
    liksCount: 21,
  },
];

let dialogs = [
  { id: 1, name: "Jax" },
  { id: 2, name: "Mango" },
  { id: 3, name: "Poli" },
  { id: 4, name: "Ajax" },
  { id: 5, name: "Baz" },
  { id: 6, name: "Congo" },
];

let messages = [
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, minus.",
  },
  {
    id: 2,
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, ullam nostrum!",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);
