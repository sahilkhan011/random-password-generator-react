import { useState, useEffect, useRef } from "react";
import "./App.css";
import { AiOutlineCheck } from "react-icons/ai";
function App() {
  const [password, setPassword] = useState("");
  const [length, setlength] = useState(5);
  const [isNumber, setNumber] = useState(false);
  const [isSpecialChar, setSpecialChar] = useState(false);

  const passwordRef = useRef(null);

  const [isCopy, setCopy] = useState(false);

  const copyPasswordToClipBoard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    //console.log("copied content :", password);

    navigator.clipboard
      .writeText(password)
      .then(() => {
        setCopy(true);
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard", err);
      });
  };

  useEffect(() => {
    let newPassword = "";
    let set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    set += isNumber ? "0123456789" : "";
    set += isSpecialChar ? "!@#$%^&*()-_+=<>?/{}[]|" : "";
    for (let i = 0; i < length; i++) {
      newPassword += set[Math.floor(Math.random() * set.length)];
    }

    setCopy(false);
    setPassword(newPassword);
  }, [length, isNumber, isSpecialChar]);

  return (
    <div className="bg-black h-screen w-screen flex items-center justify-center">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg lg:w-500">
        <div className="flex flex-col items-center">
          <h1 className=" text-cyan-50 text-lg ">Random Password Generator</h1>
          <div className="mt-4 flex w-full">
            <input
              readOnly
              className="flex-1 p-2 border border-gray-300"
              value={password}
              ref={passwordRef}
            />
            <button
              className=" p-2 flex items-center bg-blue-500 text-white"
              onClick={() => {
                copyPasswordToClipBoard();
              }}
            >
              Copy{" "}
              <AiOutlineCheck className={`m-1 ${!isCopy ? "hidden" : ""}`} />
            </button>
          </div>

          <div className="flex items-center">
            {/* Input */}
            <div className="mr-4 flex items-center">
              <input
                type="range"
                min={5}
                max={20}
                value={length}
                onChange={(e) => {
                  setlength(e.target.value);
                }}
                className="border p-2 rounded"
              />
              <div className="ml-2 w-3 text-cyan-50">{length}</div>
            </div>

            {/* Checkboxes */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="numbersCheckbox"
                className="mr-2"
                onChange={() => {
                  setNumber((prev) => {
                    return !prev;
                  });
                }}
              />
              <label htmlFor="numbersCheckbox" className="mr-4 text-cyan-50">
                Numbers
              </label>

              <input
                type="checkbox"
                id="specialCharsCheckbox"
                className="mr-2"
                onChange={() => {
                  setSpecialChar((prev) => {
                    return !prev;
                  });
                }}
              />
              <label htmlFor="specialCharsCheckbox" className="text-cyan-50">
                Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
