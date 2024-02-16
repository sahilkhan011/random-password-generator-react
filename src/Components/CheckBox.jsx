/* eslint-disable react/prop-types */
export default function CheckBox({ setFun, text }) {
  let inputId = Math.random().toString();
  return (
    <>
      <div className="flex flex-2">
        <input
          type="checkbox"
          id={`${inputId}`}
          className="mr-2"
          onChange={() => {
            setFun((prev) => {
              return !prev;
            });
          }}
        />
        <label htmlFor={`${inputId}`} className="mr-4 text-cyan-50">
          {text}
        </label>
      </div>
    </>
  );
}
