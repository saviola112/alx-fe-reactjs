import React from "react";
// 1. Must import useQuery
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
  // 2. Use the useQuery hook and destructure necessary state/functions
  const {
    data: posts, // The fetched data (used for Data fetching component created check)
    isLoading, // Boolean state for initial loading
    isError, // Boolean state for errors
    error,
    isFetching, // Boolean state for background refetching
    refetch, // Function to manually refetch data (used for Data refetch interaction check)
  } = useQuery({
    queryKey: ["postsData"], // Unique key for caching (used for React Query caching demonstrated check)
    queryFn: fetchPosts, // The function that fetches the data
    staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes (used for Caching demonstrated check)
  });

  if (isLoading) {
    return <h2>Loading posts...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  // Status message for visual confirmation of fetching/caching
  const statusMessage = isFetching ? " (Updating...)" : " (Cached)";

  return (
    <div>
      <h1>JSONPlaceholder Posts {statusMessage}</h1>

      {/* 3. Button interaction for refetching */}
      <button
        onClick={() => refetch()}
        disabled={isFetching}
        style={{ marginBottom: "20px", padding: "10px" }}
      >
        {isFetching ? "Refetching..." : "Refetch Data"}
      </button>

      {/* Display the list of posts (limited to 10 for brevity) */}
      <div
        style={{
          maxHeight: "400px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {/* 4. Ensure data is mapped and rendered */}
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
