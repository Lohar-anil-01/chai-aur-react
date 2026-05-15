import { useState } from "react";
import ColorButton from "./ColorButton.jsx";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    { color: "red" },
    { color: "green" },
    { color: "blue" },
    { color: "olive" },
    { color: "gray" },
    { color: "yellow", textColor: "black" },
    { color: "pink", textColor: "black" },
    { color: "purple" },
    { color: "lavender", textColor: "black" },
    { color: "white", textColor: "black" },
    { color: "black" },
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((color) => (
            <ColorButton
              key={color.color}
              color={color.color}
              textColor={color.textColor}
              setColor={setColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
