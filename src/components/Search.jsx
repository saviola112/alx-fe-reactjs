import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch {
      setError("Looks like we can't find the user");
      setUserData(null);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-10 bg-gray-800 rounded shadow-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 items-center"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border border-gray-600 rounded p-2 flex-1 bg-gray-900 text-white placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-400">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      
      {userData && (
        <div className="mt-6 p-4 bg-gray-700 rounded flex flex-col items-center gap-2">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 rounded-full"
          />
          <p className="text-white text-lg font-semibold">
            {userData.name || userData.login}
          </p>
          <a
            href={userData.html_url}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
