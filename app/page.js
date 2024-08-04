// pages/index.js
"use client";

import ToggleButton from "../components/toogleButton";
import { useTheme } from "next-themes";

import "./test.css";

const Home = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="container">
      <div className="subLightContainer">
        <h1>Hello World</h1>
        <img
          src={
            theme === "light"
              ? "./account_circle.svg"
              : "./account_circle_off.svg"
          }
          alt="image test"
        />
        <ToggleButton />
      </div>
    </div>
  );
};

export default Home;
