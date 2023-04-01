import React from "react";
import Post from "./Post";

function PostList({posts, user, users}) {

    const postArray = posts.map( postObj => {
        if (user != undefined && postObj.recipient_id == user.id) {
            return <Post key={postObj.id} post={postObj} users={users} />
        }
    } )

    return (
        <div>
            <br></br>
            <div>Posts:</div>
            <div>{postArray}</div>
        </div>
    );
}

export default PostList;