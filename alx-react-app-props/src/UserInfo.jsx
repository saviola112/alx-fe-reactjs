import UserDetails from './UserDetails';

// UserInfo no longer receives or passes the 'userData' prop
function UserInfo() {
  return (
    <div className="p-4 border-l-4 border-l-green-500 bg-green-50 rounded-lg shadow-inner">
      <h3 className="text-lg font-medium mb-3 text-green-800">User Information Wrapper</h3>
      <UserDetails />
    </div>
  );
}

export default UserInfo;