import axios from 'axios';
import React from "react";
import Post from "./Post";

function PostList({posts, user, users, loggedInUser, addPostToState}) {

    const postArray = posts.map( postObj => {
        if (user != undefined && postObj.recipient_id == user.id) {
            return <Post key={postObj.id} post={postObj} users={users} />
        }
    } )

    const handlePostSubmit = e => {
        e.preventDefault()
    
        const newPost = {

        }
    
        axios.post('https://project-sdh-server.onrender.com/posts', { 
          text: e.target.text.value,
          author: loggedInUser.id,
          recipient: user.id,
         })
           //.then( r => r.json() )
           .then( addPostToState )
           .then (e.target.reset())
         }

    return (
        <div>
            <br></br>
            <div>Posts:</div>
            <div>{postArray}</div>
            <br></br>
            <form onSubmit={handlePostSubmit}>
                <div className="flex justify-center px-2 py-1"><input className="px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl
        border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2" type="text" name="text" 
        placeholder="Write your message..." /></div>
                <div className="flex justify-center px-2 py-3"><button type="submit">Add Post</button></div>
            </form>
        </div>
    );
}

export default PostList;