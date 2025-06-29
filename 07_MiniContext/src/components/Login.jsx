import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h1 className="text-lg mt-10 h-fit w-fit p-4 m-auto">Enter your login details</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="text-black px-4 py-1 mx-12 my-5 outline-red rounded-3xl"
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="text-black px-4 py-1 my-5 outline-red rounded-3xl"
      /> <br/>
      <button className="h-fit w-fit px-4 py-2 bg-yellow-700 text-white font-bold rounded-lg mb-4" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
