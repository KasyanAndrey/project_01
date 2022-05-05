let store = {
  _state: {
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
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    // subscribe -> Подписываться
    this._callSubscriber = observer; // observer -> паттерн (наблюдатель)
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber();
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 3,
        message: this._state.dialogsPage.newMessageText,
      };

      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
