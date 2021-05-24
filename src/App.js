import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  const fullName = "Betty P Nelson";
  const bio = [
    "Gender: female",
    "Title: Mrs",
    "Race: White",
    "Birthday: 11/5/1992",
    "SocialSecurityNumber: 395-03-9081",
  ];
  const adress = "3030  Tea Berry Lane";
  const handleName = (name) => alert("My name is : " + name);
  return (
    <div className="App">
      <Profile
        fullName="Betty P Nelson"
        bio={bio}
        adress="3030  Tea Berry Lane"
        handleName={handleName}
      >
        <div style={{ width: "100%", height: "200px" }}>
          <img
            src="https://picsum.photos/200/300"
            alt="random"
            width="100%"
            height="220px"
          />
        </div>
      </Profile>
    </div>
  );
}

export default App;
