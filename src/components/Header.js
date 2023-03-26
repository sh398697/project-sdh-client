import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import '../index.css';
import App from '../App';

function Header({currentUser}) {

  return (
  <div className="w-screen h-[120px] z-10 bg-slate-600 justify-center items-center">
      <div className="justify-center items-center">
        <div><h1 className="text-3xl font-bold sm:text-4xl text-white mx-auto pt-6"><NavLink to="/" exact path="/">My Project</NavLink></h1></div>
        <div className="pl-24">{((currentUser === "") ? (<NavLink to="/login" exact path="/login"><span className="text-white text-base pt-4 p-3"></span></NavLink>) : (<span className="text-white text-base pl-3">Welcome, {currentUser}</span>))}</div>

        <ul className="flex flex-initial h-[95px] z-10 bg-slate-600 items-center justify-center mx-auto">
          <NavLink to="/" exact path="/" className="flex-initial w-48"><li>Home</li></NavLink>
          <NavLink to="/login" exact path="/login" className="flex-initial w-48"><li>My Account</li></NavLink>
          <NavLink to="/mybooks" exact path="/mybooks" className="flex-initial w-48"><li>My Books</li></NavLink>
          <NavLink to="/newbook" exact path="/newbooks" className="flex-initial w-48"><li>Add a Book</li></NavLink>
          <NavLink to="/home" exact path="/home" className="flex-initial w-48"><li>Home</li></NavLink>
       </ul>
      </div>
  </div>
  );
}

export default Header;
