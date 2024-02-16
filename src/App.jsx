import { useState, useEffect, useRef } from "react";
import "./App.css";
import CheckBox from "./Components/CheckBox";
import Progress from "./Components/Progress";
import Button from "./Components/Button";
import Input from "./Components/Input";
const App = () => {
  const [password, setPassword] = useState("");
  const [length, setlength] = useState(5);
  const [isNumber, setNumber] = useState(false);
  const [isSpecialChar, setSpecialChar] = useState(false);
  const passwordRef = useRef(null);
  const [isCopy, setCopy] = useState(false);

  const copyPasswordToClipBoard = () => {
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0, 2);
    //console.log("Copied Content : ", password);
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
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-fit m-4">
        <div className="flex flex-col items-center">
          <h1 className=" text-cyan-50 text-lg ">Random Password Generator</h1>

          <div className="mt-4 flex w-full">
            <Input password={password} passRef={passwordRef} />
            <Button copyFun={copyPasswordToClipBoard} isCopyVal={isCopy} />
          </div>

          <div className="flex items-center">
            <div className="mr-4 flex flex-wrap items-center">
              {/* ProgressBar */}
              <Progress
                setFun={setlength}
                propmin={5}
                propmax={20}
                proplength={length}
              />
              {/* CheckBox */}
              <CheckBox setFun={setNumber} text={`Number`} />
              {/* CheckBox */}
              <CheckBox setFun={setSpecialChar} text={`Special Characters`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
