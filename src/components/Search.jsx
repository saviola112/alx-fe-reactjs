import { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [user, setUser] = useState(null);
  const [advancedUsers, setAdvancedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // -------------------
  // Basic Search Handler
  // -------------------
  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);
    setAdvancedUsers([]);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  // -------------------
  // Advanced Search Handler
  // -------------------
  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);
    setAdvancedUsers([]);

    try {
      const results = await fetchAdvancedUsers(location, minRepos);
      if (results.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setAdvancedUsers(results);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        GitHub User Search
      </h1>

      {/* BASIC SEARCH */}
      <form
        onSubmit={handleBasicSearch}
        className="mb-6 p-4 bg-gray-100 rounded-lg shadow"
      >
        <h2 className="text-xl font-semibold mb-3">Basic Search</h2>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Search User
        </button>
      </form>

      {/* ADVANCED SEARCH */}
      <form
        onSubmit={handleAdvancedSearch}
        className="p-4 bg-gray-100 rounded-lg shadow"
      >
        <h2 className="text-xl font-semibold mb-3">Advanced Search</h2>
        <input
          type="text"
          placeholder="Location (e.g Lagos)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Advanced Search
        </button>
      </form>

      {/* LOADING */}
      {loading && <p className="text-center mt-4">Loading...</p>}

      {/* ERROR */}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* BASIC SEARCH RESULT */}
      {user && (
        <div className="mt-6 p-4 bg-white shadow rounded text-center">
          <img
            src={user.avatar_url}
            alt="avatar"
            className="w-24 mx-auto rounded-full"
          />
          <h3 className="text-xl font-bold mt-3">{user.name || user.login}</h3>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            View Profile
          </a>
        </div>
      )}

      {/* ADVANCED SEARCH RESULTS */}
      {advancedUsers.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Search Results</h2>
          {advancedUsers.map((u) => (
            <div
              key={u.id}
              className="flex items-center gap-4 p-4 bg-white mb-3 shadow rounded"
            >
              <img
                src={u.avatar_url}
                alt="avatar"
                className="w-16 rounded-full"
              />
              <div>
                <p className="font-bold">{u.login}</p>
                <a
                  href={u.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
