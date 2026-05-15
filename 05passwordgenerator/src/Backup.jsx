import { useState, useCallback } from "react";
// import "./App.css";

function Backup() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()-_=+[]{}|<>/?";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto my-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6">
        <h1 className="text-center text-base font-medium text-zinc-800 dark:text-zinc-100 mb-5">
          Password generator
        </h1>
        <div className="flex items-center border border-zinc-300 dark:border-zinc-600 rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-800 mb-4">
          <input
            type="text"
            value={password}
            className="flex-1 bg-transparent px-3 py-2.5 text-sm font-mono text-zinc-800 dark:text-zinc-100 outline-none tracking-wider"
            placeholder="password generator"
            readOnly
          />
          <button className="px-4 h-10 bg-blue-500 hover:bg-blue-700 text-blue-50 text-sm font-medium flex items-center gap-1.5 transition-colors shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-white">Length: {length}</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="text-white">
              Number
            </label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="text-white">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Backup;
