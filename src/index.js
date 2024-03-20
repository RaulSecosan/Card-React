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
      about=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      skills={[
        { skill: "HTSS-CSS ", emoji: "😀", skillBackground: "red" },
        { skill: "JAVASCRIPT ", emoji: "😎", skillBackground: "blue" },
        { skill: "FIREBASE", emoji: "😎", skillBackground: "orange" },
        { skill: "FIRESTORE", emoji: "😎", skillBackground: "yellow" },
      ]}
    />
    <App
      img="jaguar.jpg"
      name="Raul"
      about=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      skills={[
        { skill: "Web", emoji: "😀", skillBackground: "GREEN" },
        { skill: "Full", emoji: "😎", skillBackground: "PURPLE" },
        { skill: "Stack", emoji: "😎", skillBackground: "#161" },
        { skill: "Nice", emoji: "😎", skillBackground: "yellow" },
      ]}
    />
    <App
      img="jaguar.jpg"
      name="Seco"
      about=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      skills={[
        { skill: "DATABASE", emoji: "😀", skillBackground: "#0001" },
        { skill: "JSON", emoji: "😎", skillBackground: "blue" },
        { skill: "API", emoji: "😎", skillBackground: "orange" },
        { skill: "REST", emoji: "😎", skillBackground: "#2001" },
      ]}
    />
  </React.StrictMode>
);
