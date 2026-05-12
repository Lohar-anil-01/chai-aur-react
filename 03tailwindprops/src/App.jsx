import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  const myObj = {
    name: "Hitesh",
    age: 21,
  };

  const newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <div className="flex gap-4 p-4">
        <Card
          username="ChaiaurCode"
          btnText="click me"
          image="https://chaicode.com/assets/black-2-BQlauZxh.webp"
        />
        <Card
          username="Piyush Garg"
          btnText="Visit me"
          image="https://chaicode.com/assets/piyush-black-HiMkFfWw.webp"
        />
      </div>
    </>
  );
}

export default App;
