import React from "react";

function Post({post, users}) {

    const post_author = users[post.author_id-1].fname + " " + users[post.author_id-1].lname;

    return (
    <div>{post_author} wrote: {post.text}</div>
    );
}

export default Post;