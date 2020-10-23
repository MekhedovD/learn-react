import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = 
  props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} />)

  let newPostElement = React.createRef();

  let addPosts = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPosts}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElement }
      </div>
    </div>
  );
};

export default MyPosts;
