import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div
      style={{
        borderRadius: "15px",
        width: "40%",
        backgroundColor: "pink",
      }}
    >
      <div>{props.children}</div>
      <h1 style={{ fontSize: "2em", color: "red" }}>{props.fullName}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "200px",
          marginBottom: "10px",
          fontSize: "20px",
        }}
      >
        {(props.bio || ["wrong"]).map((x, i) => (
          <div key={i}>{x}</div>
        ))}
      </div>
      <div style={{ margin: "15px" }}>{props.adress}</div>
      {props.handleName !== undefined ? (
        <button onClick={() => props.handleName(props.fullName)}>
          click me
        </button>
      ) : (
        "you need to write a function to click"
      )}
    </div>
  );
};
Profile.defaultProps = {
  fullName: "bilel manai",
  //   bio: ["default"],
  children: (
    <img
      src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltcfa4652c8d383f56/5e21837f63d1b6503160d39b/Home-page.jpg"
      alt="random"
    />
  ),
  adress: "Grombalia",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.array,
  handleName: PropTypes.func,
};
export default Profile;
