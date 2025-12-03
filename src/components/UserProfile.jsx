// src/components/UserProfile.jsx (Updated Code)

function UserProfile() {
  return (
    // Container: Added responsive max-w and text alignment
    <div className="user-profile bg-gray-100 p-8 max-w-sm md:max-w-md lg:max-w-lg mx-auto my-20 rounded-lg shadow-lg text-center">
      {/* Image: Added responsive sizing */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto"
      />

      {/* Heading: Added responsive font size */}
      <h1 className="text-lg md:text-xl font-bold text-blue-800 my-4">
        John Doe
      </h1>

      {/* Paragraph: Added responsive font size */}
      <p className="text-sm md:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
