let state = {
  profilePage: {
    posts: [
    { id: 1, message: "Hello! How are you", likeCount: 12 },
    { id: 2, message: "It's my first post", likeCount: 20 },
  ],
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

export default state;