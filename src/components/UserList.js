import React from "react";
import UserCard from "./UserCard";

function UserList({users}) {
  
  const userCardsArray = users.map( userObj => {
    return <UserCard key={userObj.id} user={userObj} />  
  } )
  
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid gap-4 2xl:grid-cols-6 2xl:gap-4 xl:grid-cols-5 xl:gap-4 lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-4 sm:grid-cols-2 sm:gap-4">{userCardsArray}</div>
      </div>
    </section>
    );
}

export default UserList;