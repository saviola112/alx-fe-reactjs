// src/components/UserProfile.jsx

function UserProfile() {
  return (
    // Container Styling
    // Fix: 'clanime' to 'className', 'bgfgray' to 'bg-gray-100', text-center added
    <div className="user-profile bg-gray-100 p-8 max-w-sm md:max-w-md lg:max-w-lg mx-auto my-20 rounded-lg shadow-lg text-center">
      
      {/* Image Styling */}
      {/* Fix: 'fuchlon' to 'src', 'plaachaadre' to 'placeholder', 'rounted' to 'rounded' */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto" 
      />
      
      {/* Heading Styling */}
      {/* Fix: 'foxt-Bold' to 'font-bold', combined classes */}
      <h1 className="text-lg md:text-xl font-bold text-blue-800 my-4">
        John Doe
      </h1>
      
      {/* Paragraph Styling */}
      {/* Fix: Combined classes, fixed font size */}
      <p className="text-sm md:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

// Fix: 'export cehortult ()' to standard export
export default UserProfile;