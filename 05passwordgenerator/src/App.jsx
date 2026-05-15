import { useState, useCallback, useEffect, useRef } from "react";
// import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef() hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()-_=+[]{}|<>/?";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 7);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

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
            className="flex-1 min-w-0 bg-transparent px-3 py-2.5 text-sm font-mono text-zinc-800 dark:text-zinc-100 outline-none tracking-widest placeholder:text-zinc-400"
            placeholder="password generator"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="px-4 h-10 bg-blue-500 hover:bg-blue-600 active:scale-95 text-blue-50 text-sm font-medium flex items-center gap-1.5 transition-all shrink-0"
          >
            Copy
          </button>
        </div>

        <hr className="border-zinc-200 dark:border-zinc-700 mb-4" />

        <div className="flex flex-col gap-4 text-sm">
          <div className="flex items-center gap-3">
            <label className="text-zinc-500 dark:text-zinc-400 w-14 shrink-0">
              Length
            </label>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="flex-1 cursor-pointer accent-blue-500"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <span className="text-zinc-800 dark:text-zinc-100 font-medium w-7 text-right">
              {length}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-zinc-500 dark:text-zinc-400 w-14 shrink-0">
              Include
            </label>
            <div className="flex gap-5">
              <label className="flex items-center gap-2 cursor-pointer text-zinc-600 dark:text-zinc-300">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  className="accent-blue-500 w-4 h-4 cursor-pointer"
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                Numbers
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-zinc-600 dark:text-zinc-300">
                <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="charInput"
                  className="accent-blue-500 w-4 h-4 cursor-pointer"
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
