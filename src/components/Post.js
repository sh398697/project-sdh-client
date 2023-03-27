import React from "react";

function Post({post}) {

return (
    <div>`{post.author} wrote: {post.text}`</div>
    );
}

export default Post;