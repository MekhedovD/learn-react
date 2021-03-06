import React from "react";
import MyPost from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost posts={props.profilePage.posts}
        newPostText ={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPosts={props.addPosts} />
    </div>
  );
};

export default Profile;
