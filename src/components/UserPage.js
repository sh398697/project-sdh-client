import React from "react";
import PostList from "./PostList";

function UserPage({user, posts, users}) {

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div><img className='mx-auto max-h-[300px] rounded-lg rounded-tl-[50px]' src={user.image} /></div>
      <div><span>{user.fname} {user.lname}</span></div>
      <div>{user.location}</div>
      <PostList posts={posts} user={user} users={users} />
    </div>
    );
}

export default UserPage;

