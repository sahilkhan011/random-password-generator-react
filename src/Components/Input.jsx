/* eslint-disable react/prop-types */
export default function Input({ password, passRef }) {
  return (
    <>
      <input
        readOnly
        className="flex-1 p-2 border border-gray-300"
        value={password}
        ref={passRef}
      />
    </>
  );
}
