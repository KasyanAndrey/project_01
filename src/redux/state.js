import { renderEntireTree } from "../render.js";

let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, minus.",
        likesCount: 12,
      },
      {
        id: 2,
        message:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, ullam nostrum!",
        likesCount: 21,
      },
    ],
  },
  dialogsPage: {
    messages: [
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
    ],
    dialogs: [
      { id: 1, name: "Jax" },
      { id: 2, name: "Mango" },
      { id: 3, name: "Poli" },
      { id: 4, name: "Ajax" },
      { id: 5, name: "Baz" },
      { id: 6, name: "Congo" },
    ],
  },
};

export const addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
};

export default state;
