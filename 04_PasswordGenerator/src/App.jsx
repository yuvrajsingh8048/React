import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowd] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()}{}`_+-/<>:;'";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  const copyPassword = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="  text-white my-10 bg-gray-700 justify-center px-5 py-3">
        <h1 className="text-4xl text-orange-500 font-semibold mb-5">
          Password Generator
        </h1>

        <div>
          <input
            type="text"
            ref={passwordRef}
            value={password}
            placeholder="Password"
            name=""
            id=""
            readOnly
            className="w-4/12 outline-none py-0.5 px-3 my-5 rounded-tl-2xl rounded-bl-2xl text-black font-semibold"
          />
          <button
            onClick={copyPassword}
            className="bg-blue-600 px-3 py-0.5 rounded-tr-2xl rounded-br-2xl outline-none font-semibold hover:bg-blue-700
            "
          >
            Copy
          </button>
        </div>
        <div className="flex justify-center ">
          <input
            type="range"
            min={6}
            max={100}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="mx-4">Length ({length})</label>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numInput"
            onChange={() => {
              setNumAllowd((prev) => !prev);
            }}
            className="ml-5 mr-1 cursor-pointer"
          />
          <label htmlFor="numInput">Number</label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            value={length}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            className="ml-5 mr-1"
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
