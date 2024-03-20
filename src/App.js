import "./App.css";

function App({ img, name, about, skills }) {
  console.log(skills);
  return (
    <div className="App">
      <div className="card">
        <div className="image1">
          <img className="image" src={img} alt="banner" />
        </div>

        <div className="half">
          <div className="title">{name}</div>
          <p className="about"> {about} </p>
          {skills.map((skill) => (
            <div
              className="skills"
              style={{ backgroundColor: skill.skillBackground }}
            >
              <div>
                {skill.skill}
                {skill.emoji}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
