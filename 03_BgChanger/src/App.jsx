import { useState } from "react";

function App() {
  let [color, setColor] = useState("olive");
  console.log(color);
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    > 
    <h1 className="text-center underline pt-10 text-white font-bold text-3xl">Tap any button to change background color</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-20 py-3">
        <div className="bg-white rounded-3xl px-10 py-3 shadow-lg text-black">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="rounded-3xl ml-5 px-5 py-2 font-bold text-lg "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="rounded-3xl ml-5  px-5 py-2 font-bold text-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="rounded-3xl ml-5  px-5 py-2 font-bold text-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("violet");
            }}
            className="rounded-3xl ml-5  px-5 py-2 font-bold text-lg"
            style={{ backgroundColor: "Violet" }}
          >
            Violet
          </button>
          <button
            onClick={() => {
              setColor("gray");
            }}
            className="rounded-3xl ml-5  px-5 py-2 font-bold text-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => {
              setColor("purple");
            }}
            className="rounded-3xl ml-5  px-5 py-2 font-bold text-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => {
              setColor("aqua");
            }}
            className="rounded-3xl ml-5  px-5 py-2 font-bold text-lg"
            style={{ backgroundColor: "aqua" }}
          >
            Aqua
          </button>
          <button
            onClick={() => {
              setColor("orange");
            }}
            className="rounded-3xl ml-5  px-5 py-2 font-bold text-lg"
            style={{ backgroundColor: "Orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => {
              setColor("pink");
            }}
            className="rounded-3xl ml-5 px-5 py-2 font-bold text-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="rounded-3xl ml-5  px-5 py-2 font-bold text-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
