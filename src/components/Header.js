import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import '../index.css';

function Header({currentUser}) {

  return (
  <div className="w-screen h-[120px] z-10 bg-slate-600 justify-center items-center">
      <div className="justify-center items-center">
        <div><h1 className="text-3xl font-bold sm:text-4xl text-white mx-auto pt-6"><NavLink to="/" exact path="/">StinkBook 1.0</NavLink></h1></div>
        <div className="pl-24">{((currentUser === "") ? (<NavLink to="/login" exact path="/login"><span className="text-white text-base pt-4 p-3">Login</span></NavLink>) : (<span className="text-white text-base pl-3">Welcome, {currentUser}</span>))}</div>

        <ul className="flex flex-initial h-[95px] z-10 bg-slate-600 items-center justify-center mx-auto">
          <NavLink to="/" exact path="/" className="flex-initial w-48"><li>Home</li></NavLink>
          <NavLink to="/userpage" exact path="/userpage" className="flex-initial w-48"><li>User Page</li></NavLink>
          <NavLink to="/login" exact path="/login" className="flex-initial w-48"><li>My Account</li></NavLink>
          <NavLink to="/about" exact path="/about" className="flex-initial w-48"><li>About</li></NavLink>
       </ul>
      </div>
  </div>
  );
}

export default Header;
