import React from "react";
import { useState, useEffect } from "react";
import UserList from "./UserList";
import PostList from "./PostList";

function Home({users, setUsers, friendships, setFriendships, posts, setPosts, selectedUser, setSelectedUser}) {

  useEffect( () => {
  fetch( `http://localhost:8000/users` )
       .then( r => r.json() )
       .then( setUsers )
   }, [] )

  useEffect( () => {
    fetch( `http://localhost:8000/friendships` )
       .then( r => r.json() )
       .then( setFriendships )
  }, [] )

  useEffect( () => {
    fetch( `http://localhost:8000/posts` )
      .then( r => r.json() )
      .then( setPosts )
  }, [] )

  return (
      <div className="container mx-auto bg-gray-200 rounded-xl border p-8 m-10">
        <UserList users={users} posts={posts} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      </div>
    );
}

export default Home;
