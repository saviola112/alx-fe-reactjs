import UserInfo from './UserInfo';

// ProfilePage no longer receives or passes the 'userData' prop
function ProfilePage() {
  return (
    <div className="p-4 border border-indigo-200 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2 text-indigo-700">Profile Page Container</h2>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;