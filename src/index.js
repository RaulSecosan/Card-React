import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      img="jaguar.jpg"
      name="Raul Secosan"
      about=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrumollit anim id est laborum."
      skills={["HTML + CSS", "JAVASCRIPT"]}
      skillBackground="red"
    />

    <App
      img="jaguar.jpg"
      name="Seco"
      about=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrumollit anim id est laborum."
      skills={["HTML + CSS", "JAVASCRIPT"]}
      skillBackground="yellow"
    />

    <App
      img="jaguar.jpg"
      name="Raul"
      about=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrumollit anim id est laborum."
      skills={["HTML + CSS", "JAVASCRIPT"]}
    />
  </React.StrictMode>
);
