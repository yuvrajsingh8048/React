import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card.jsx";

function App() {
  return (
    <>
      <h1 className="mb-4">Tailwind Test</h1>
      <Card machine="Macbook" btnText="Visit Macbook Store" />
      <Card machine="ASUS" btnText={"Come to our Asus Store"} />
    </>
  );
}

export default App;
