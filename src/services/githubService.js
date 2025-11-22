import axios from "axios";

// Basic user fetch
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Advanced user search
export const fetchAdvancedUsers = async (location, minRepos) => {
  let query = "";

  if (location) query += `location:${location}`;
  if (minRepos) query += `+repos:>${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );

  return response.data.items; // list of users
};
