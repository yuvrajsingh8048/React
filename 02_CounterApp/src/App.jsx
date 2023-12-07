import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  let [text, setText] = useState("");
  function addValue() {
    if (counter < 10) {
      text = "";
      counter = counter + 1;
      setCounter(counter);
      setText(text);
    } else {
      text = "Number can not be greater than 10";
      setText(text);
    }
  }
  function removeValue() {
    if (counter > 0) {
      text = "";
      counter = counter - 1;
      setCounter(counter);
      setText(text);
    } else {
      text = "Number can not be less than 0";
      setText(text);
    }
  }
  return (
    <>
      <div className="h-3/6 w-10/12 my-40 m-auto bg-gray-300 justify-center text-center rounded-3xl">
        <h1 className="text-black text-5xl font-bold py-8">Chai aur React</h1>
        <h2 className="text-3xl font-semibold text-black">
          Counter App ({counter})
        </h2>
        <h3 className="my-5 text-red-700 text-lg font-medium">{text}</h3>
        <button
          className="rounded-lg px-4 py-2 border-2 border-orange-300 bg-amber-300 text-red-800 font-semibold my-10 mx-5"
          onClick={addValue}
        >
          Add Value
        </button>
        <button
          className="rounded-lg px-4 py-2 border-2 border-orange-300 bg-amber-300 text-red-800 font-semibold my-10 mx-5"
          onClick={removeValue}
        >
          Remove Value
        </button>
      </div>
    </>
  );
}

export default App;
