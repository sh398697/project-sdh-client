import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import PostList from './PostList';

function Home({users, setUsers, friendships, setFriendships, posts, setPosts, selectedUser, setSelectedUser}) {

  useEffect(() => {
    axios.get('https://project-sdh-server.onrender.com/users')
      .then(response => setUsers(response.data));
  }, []);
  
  useEffect(() => {
    axios.get('https://project-sdh-server.onrender.com/friendships')
      .then(response => setFriendships(response.data));
  }, []);
  
  useEffect(() => {
    axios.get('https://project-sdh-server.onrender.com/posts')
      .then(response => setPosts(response.data));
  }, []);

  return (
      <div className="container mx-auto bg-gray-200 rounded-xl border p-8 m-10">
        <UserList users={users} posts={posts} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      </div>
    );
}

export default Home;
