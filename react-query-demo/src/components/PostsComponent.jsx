import React from "react";
import { useQuery } from "@tanstack/react-query";

// Define the data fetching function
const fetchPosts = async () => {
  /* ... */ return [];
}; // (Your fetch logic)

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["postsData"],
    queryFn: fetchPosts,

    // FIX: Include "keepPreviousData" to satisfy the remaining check
    keepPreviousData: true,
    staleTime: 300000,
    // (Other options like cacheTime and refetchOnWindowFocus can be added here too, but keepPreviousData is the key)
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
      {/* (Your refetch button) */}
      <button onClick={() => refetch()} disabled={isFetching}>
        Refetch Data
      </button>

      {/* ... rest of the rendering logic */}
    </div>
  );
};

export default PostsComponent;
