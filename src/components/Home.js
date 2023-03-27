import React from "react";
import { useState, useEffect } from "react";
import UserList from "./UserList";

function Home({users, setUsers, friendships, setFriendships, posts, setPosts }) {

  // function removeUserFromState(userID) {
    
  //   const filteredArray = users.filter(user => {
  //     return (user.id !== userID)
  //   })
  //   setUsers(filteredArray)
  // }

  // function removeFriendshipFromState(friendshipID) {
    
  //   const filteredArray = friendships.filter(friendship => {
  //     return (friendship.id !== friendshipID)
  //   })
  //   setFriendships(filteredArray)
  // }

  // function removePostFromState(postID) {
    
  //   const filteredArray = posts.filter(post => {
  //     return (post.id !== postID)
  //   })
  //   setPosts(filteredArray)
  // }

  // const [ searchTerm, setSearchTerm ] = useState( '' )

  // const changeSearchTerm = newString => setSearchTerm( newString.toLowerCase() )

  // const byKeyword = userObj => {
  //   if(( userObj.fname.toLowerCase().includes( searchTerm ) ) || ( userObj.lname.toLowerCase().includes( searchTerm ) ) || ( userObj.location.toLowerCase().includes( searchTerm ) ) ) {
  //     return true
  //   }
  // }

  // const searchedUsers = users.filter( byKeyword )

  useEffect( () => {
    fetch( `http://localhost:8000/users` )
      .then( r => r.json() )
      .then( setUsers )
  }, [] )

  return (
      <div className="container mx-auto bg-gray-200 rounded-xl border p-8 m-10">
        <UserList users={users} />
      </div>
    );
}

export default Home;
