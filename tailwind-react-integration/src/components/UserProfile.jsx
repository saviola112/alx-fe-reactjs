// src/components/UserProfile.jsx (FINAL CODE)

function UserProfile() {
  return (
    // Container: ADDED: transition, duration, ease-in-out, hover:shadow-xl
    // Requirement 3: Enhanced Shadows on Card Hover
    <div
      className="user-profile bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-lg mx-auto my-20 rounded-lg shadow-lg text-center 
                    transition duration-300 ease-in-out hover:shadow-xl"
    >
      {/* Image: ADDED: transition, duration, ease-in-out, hover:scale-110 */}
      {/* Requirement 1: Hover Effects on Image */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto 
                   transition duration-300 ease-in-out hover:scale-110"
      />

      {/* Heading: ADDED: hover:text-blue-500 */}
      {/* Requirement 2: Text Emphasis on Hover */}
      <h1 className="text-lg md:text-xl font-bold text-blue-800 my-4 hover:text-blue-500">
        John Doe
      </h1>

      {/* Paragraph: Unchanged */}
      <p className="text-sm md:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
