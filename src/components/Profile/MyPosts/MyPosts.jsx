import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hello! How are you' likeCount='12' />
        <Post  message="It's my first post" likeCount='20' />
      </div>
    </div>
  );
};

export default MyPosts;
