// src/App.jsx
import UserProfile from './UserProfile';
import UserContext from './UserContext'; // 1. Import the context

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // 2. Wrap the component tree in the Provider
    // and pass the data to the 'value' prop
    <UserContext.Provider value={userData}>
      <ProfilePage /> 
      {/* 3. Note: The 'userData' prop is no longer passed to ProfilePage */}
    </UserContext.Provider>
  );
}

export default App;