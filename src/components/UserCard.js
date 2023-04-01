import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function UserCard({user, posts, selectedUser, setSelectedUser}) {

  const [detailToggle, setDetailToggle] = useState(false)

  function userDetailToggle(){
    setDetailToggle(!detailToggle)
  }

  function userDetailToggle(){
    setDetailToggle(!detailToggle)
  }

  function visitUserPageClick(){
    setSelectedUser(user)
  }

  return (
      <div className="bg-white p-4 rounded-lg rounded-tl-[70px]
       w-full max-w-[240px] mx-auto my-2 cursor-pointer hover:scale-105 duration-200">
        { detailToggle ? (null) : 
          <div><img className='mx-auto max-w-[200px] max-h-[300px] rounded-lg rounded-tl-[50px]' src={user.image} alt={user.fname} onClick={userDetailToggle}/></div>}     
         <div className= "flex gap-x-1 text-xs">
            { detailToggle ? (
              <div className="p-4 max-w-[240px] cursor-pointer text-xs h-[300px]" onClick={userDetailToggle}>
                <div>{user.fname} {user.lname}</div>
                <div>{user.location}</div>
            </div>) : null}
          </div>
          <div>
            <NavLink to="/userpage" exact path="/userpage"><span onClick={visitUserPageClick}><u>{user.fname} {user.lname}</u></span></NavLink>
          </div>
      </div>
    );
}

export default UserCard;

