import React from "react";
import MyPost from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://tinyjpg.com/images/social/website.jpg" />
      </div>
      <div>ava + description</div>
      <MyPost />
    </div>
  );
};

export default Profile;
