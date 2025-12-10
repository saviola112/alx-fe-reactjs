const UserProfile = (props) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px auto",
        width: "250px",
        textAlign: "center",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "blue" }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
