import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Image img="jaguar.jpg" />
        <div className="half">
          <Name name="Raul Secosan" />
          <About
            about=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrumollit anim id est laborum."
          />
          <Skills skills={["HTMLS + CSS", "Da"]} />
        </div>
      </div>
    </div>
  );
}

function Image({ img }) {
  return (
    <div className="image1">
      <img className="image" src={img} alt="banner" />
    </div>
  );
}

function Name({ name }) {
  return <div className="title">{name}</div>;
}

function About({ about }) {
  return <p className="about">{about}</p>;
}

function Skills({ skills }) {
  return <div className="skills">{skills.map((skill) => skill)}</div>;
}

export default App;
