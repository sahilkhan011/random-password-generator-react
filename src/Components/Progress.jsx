/* eslint-disable react/prop-types */
export default function Progress({ setFunc, propmin, propmax, proplength }) {
  return (
    <>
      <div className="flex w-fit flex-1">
        <input
          type="range"
          min={propmin}
          max={propmax}
          value={proplength}
          onChange={(e) => {
            setFunc(e.target.value);
          }}
          className="border flex-1 w-28 p-2 rounded"
        />
        <div className="m-2 w-4 text-cyan-50">{proplength}</div>
      </div>
    </>
  );
}
