// import { renderEntireTree } from "../render";

let renderEntireTree = () => {
  console.log('State changed');
}

let state = {
  profilePage: {
    posts: [
    { id: 1, message: "Hello! How are you", likeCount: 12 },
    { id: 2, message: "It's my first post", likeCount: 20 },
  ],
    newPostText: 'it-kamasytra.com',
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Olya" },
      { id: 3, name: "Sasha" },
      { id: 4, name: "Valera" },
      { id: 5, name: "Vika" },
      { id: 6, name: "Ulya" },
    ],

    messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, message: "Ok" },
  ],
  },
  sidebar: {}, 
};

window.state=state;

export const addPosts = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likeCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}

export const subscribe = (obsrever) => {
  renderEntireTree = obsrever;
}

export default state;