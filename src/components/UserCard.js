import React from "react";
import { useState } from "react";

function UserCard({user}) {

  const [detailToggle, setDetailToggle] = useState(false)

  function userDetailToggle(){
    setDetailToggle(!detailToggle)
  }

  return (
      <div className="bg-white p-4 rounded-lg rounded-tl-[70px]
       w-full max-w-[240px] mx-auto my-2 cursor-pointer hover:scale-105 duration-200">
        { detailToggle ? (null) : <img className='mx-auto max-w-[200px] max-h-[300px] rounded-lg rounded-tl-[50px]' src={user.image} alt={user.fname} onClick={userDetailToggle}/>}     
         <div className= "flex gap-x-1 text-xs">
            { detailToggle ? (
              <div className="p-4 max-w-[240px] cursor-pointer text-xs h-[300px]" onClick={userDetailToggle}>
                <div>{user.fname} {user.lname}</div>
                <div>{user.location}</div>
            </div>) : null}
          </div>
      </div>
    );
}

export default UserCard;

