import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card.jsx";

function App() {
  return (
    <>
      <h1 className="mb-4">Tailwind Test</h1>
      <div className="flex gap-5">
        <Card
          machine="Macbook"
          about="The MacBook is a brand of Mac notebook computers designed and marketed by Apple Inc. that use Apple's macOS operating system since 2006."
          btnText="Visit Macbook Store"
        />
        <Card
          machine="ASUS"
          about="ASUS is a Taiwan-based, multinational computer hardware and consumer electronics company that was established in 1989."
          btnText={"Come to our Asus Store"}
        />
      </div>
    </>
  );
}

export default App;
