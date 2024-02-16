/* eslint-disable react/prop-types */
import { AiOutlineCheck } from "react-icons/ai";

export default function Button({ copyFun, isCopyVal }) {
  return (
    <>
      <button
        className=" p-2 flex items-center bg-blue-500 text-white"
        onClick={() => {
          copyFun();
        }}
      >
        Copy <AiOutlineCheck className={`m-1 ${!isCopyVal ? "hidden" : ""}`} />
      </button>
    </>
  );
}
