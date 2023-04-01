import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import UserPage from './components/UserPage';

function App() {

  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [friendships, setFriendships] = useState([])
  const [currentUser, setCurrentUser] = useState('')
  const [selectedUser, setSelectedUser] = useState('1')

  const addUserToState = userObj => {
    setUsers( [ ...users, userObj ] )
  }

  const addPostToState = postObj => {
    setPosts( [ ...posts, postObj ] )
  }

  const addFriendshipToState = friendshipObj => {
    setFriendships( [ ...friendships, friendshipObj ] )
  }

  return (
    <div>  
        <Header currentUser={currentUser}/>
        <Switch>
          <Route exact path="/userpage">
            <UserPage user={selectedUser} posts={posts} currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} />
          </Route>
          <Route exact path="/login">
            <Login users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home users={users} setUsers={setUsers} friendships={friendships} setFriendships={setFriendships} posts={posts} setPosts={setPosts} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
