import "./App.css";
import Card from "./Card.jsx";

function App() {
  return (
    <>
      <h1 className="mb-4 underline text-3xl font-bold text-yellow-500">Card Components</h1>
      <div className="flex gap-5">
        <Card
          machine="Macbook"
          about="The MacBook is a brand of Mac notebook computers designed and marketed by Apple Inc. that use Apple's macOS operating system since 2006."
          btnText="Visit Macbook Store"
          url="https://cdn.pixabay.com/photo/2018/02/10/18/16/apple-3144237_640.jpg"
        />
        <Card
          machine="ASUS"
          about="ASUS is a Taiwan-based, multinational computer hardware and consumer electronics company that was established in 1989."
          btnText="Come to our Asus Store"
          url="https://cdn.pixabay.com/photo/2014/09/27/13/45/notebook-463490_640.jpg"
        />
      </div>
    </>
  );
}

export default App;
