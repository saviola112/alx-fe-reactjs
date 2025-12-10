import React, { useContext } from 'react';
import { UserContext } from './UserContext'; // Import the context object

function UserDetails() {
  // Use the useContext hook to get the data directly from the provider (App.jsx)
  const userData = useContext(UserContext); 

  // Since UserDetails is the final component, we can add a simple check
  if (!userData) {
    return <p className="text-red-500">Error: User data not found in context.</p>;
  }

  return (
    <div className="bg-white p-4 rounded-md shadow border border-gray-200">
      <h4 className="text-2xl font-bold text-gray-900 mb-4">User Details (Context Used)</h4>
      <p className="mb-2">
        <span className="font-semibold text-gray-600">Name:</span> 
        <span className="ml-2 font-mono text-lg text-indigo-600">{userData.name}</span>
      </p>
      <p>
        <span className="font-semibold text-gray-600">Email:</span> 
        <span className="ml-2 font-mono text-lg text-indigo-600">{userData.email}</span>
      </p>
      <p className="mt-4 text-sm text-gray-500 italic">
        (Success! Prop drilling was avoided for **ProfilePage** and **UserInfo**.)
      </p>
    </div>
  );
}

export default UserDetails;