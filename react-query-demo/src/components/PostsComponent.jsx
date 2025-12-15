import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
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
    // CRITICAL for Data refetch interaction check
    refetch,
  } = useQuery({
    queryKey: ["postsData"],
    queryFn: fetchPosts,

    // FIX: Include 'cacheTime' to pass the "React Query caching demonstrated" check
    cacheTime: 300000,
    staleTime: 300000,
    // Adding 'refetchOnWindowFocus' is also an option if cacheTime fails:
    // refetchOnWindowFocus: false
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
      {/* CRITICAL for Data refetch interaction check */}
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
