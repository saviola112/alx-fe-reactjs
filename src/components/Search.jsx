import React, { useState } from "react";
import { fetchUserData } from "../api/githubApi";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const users = await fetchUserData(username, location, minRepos);
      setResults(users);
    } catch (err) {
      setError("Failed to fetch data");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl space-y-4">
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Search GitHub username..."
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Filter by location (optional)"
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum repos (optional)"
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="w-full bg-blue-500 p-2 rounded font-semibold hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {/* --- RESULTS --- */}
      <div className="grid gap-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700"
          >
            <img
              src={user.avatar_url}
              alt="avatar"
              className="w-16 h-16 rounded-full"
            />

            <div>
              <h2 className="text-xl font-semibold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-400 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
