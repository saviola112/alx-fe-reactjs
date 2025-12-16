import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  // Hook to extract the dynamic segment from the URL
  const { postId } = useParams();

  return (
    <div>
      <h2>Dynamic Blog Post</h2>
      <p>
        You are viewing Post ID: <strong>{postId}</strong>
      </p>
      <p>This content changes based on the URL path.</p>
    </div>
  );
};

export default Post;
