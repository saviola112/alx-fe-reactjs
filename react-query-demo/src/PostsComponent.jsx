// File: src/PostsComponent.jsx

import React from "react";
import { useQuery } from "@tanstack/react-query";

// Define the data fetching function
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  // Use the useQuery hook
  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["postsData"],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return <h2>Loading posts...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  const statusMessage = isFetching ? " (Updating...)" : " (Cached)";

  return (
    <div>
      <h1>JSONPlaceholder Posts {statusMessage}</h1>

      <button
        onClick={() => refetch()}
        disabled={isFetching}
        style={{ marginBottom: "20px", padding: "10px" }}
      >
        {isFetching ? "Refetching..." : "Refetch Data"}
      </button>

      <div
        style={{
          maxHeight: "400px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {posts?.slice(0, 10).map((post) => (
          <div
            key={post.id}
            style={{ borderBottom: "1px dotted #eee", padding: "10px 0" }}
          >
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsComponent;
