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
    newPostText: "Please, write...",
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
    newMessageText: "Please, write...",
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

export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export const addMessage = () => {
  let newMessage = {
    id: 3,
    message: state.dialogsPage.newMessageText,
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";
  renderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  renderEntireTree(state);
};

export default state;
