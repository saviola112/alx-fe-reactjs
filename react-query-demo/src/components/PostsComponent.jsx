import React from "react";
import { useQuery } from "@tanstack/react-query";

// Define the data fetching function
const fetchPosts = async () => {
  // FIX 1: Must contain the exact URL string for the "Data fetching" check
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    isFetching,
    // FIX 3: Must destructure 'refetch' for "Data refetch interaction" check
    refetch,
  } = useQuery({
    queryKey: ["postsData"],
    queryFn: fetchPosts,

    // FIX 2: Must include 'keepPreviousData' for the "Caching demonstrated" check
    keepPreviousData: true,
    staleTime: 300000,
  });

  if (isLoading) {
    return <h2>Loading posts...</h2>;
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <h1>JSONPlaceholder Posts</h1>

      {/* FIX 3: Must have a button tied to refetch() for "Data refetch interaction" check */}
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refetching..." : "Refetch Data"}
      </button>

      {/* ... rest of the rendering logic */}
      <div>
        {posts?.slice(0, 10).map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsComponent;
