import React from "react";
import { useState, useEffect } from "react";
// import Search from "./Search";
import UserList from "./UserList";

function Home({users, setUsers }) {

  useEffect( () => {
    fetch( `http://localhost:8000/users` )
      .then( r => r.json() )
      .then( setUsers )
  }, [] )

  return (
      <div className="container mx-auto bg-gray-200 rounded-xl border p-8 m-10">
        {/* <Search changeSearchTerm={ changeSearchTerm } /> */}
        <UserList users={users} />
      </div>
    );
}

export default Home;

{/* <NewUserForm currentUser={currentUser} addUserToState={ addUserToState }/> */}