import "./App.css";

function App({ img, name, about, skills, skillBackground }) {
  return (
    <div className="App">
      <div className="card">
        <div className="image1">
          <img className="image" src={img} alt="banner" />
        </div>

        <div className="half">
          <div className="title">{name}</div>
          <p className="about"> {about} </p>
          <div className="skills" style={{ backgroundColor: skillBackground }}>
            {skills}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
