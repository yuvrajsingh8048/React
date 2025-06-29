import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <UserContextProvider >
      <h1 className="text-yellow-400 font-bold text-2xl">This is mini Context!!!</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
