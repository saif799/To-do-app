import { useState } from "react";

export const AddBtn = ({ handleAdd, props, children }) => {
  const [clicked, setClicked] = useState(false);
  const [value, setValue] = useState("");
  return (
    <>
      {!clicked ? (
        <button
          style={{
            backgroundColor: "#231f20",
            border: "none",
            color: "white",
            padding: "8px 16px",
            cursor: "pointer",
            outline: "none",
            marginTop: 3 + "rem",
            width: 100 + "%",
          }}
          onClick={() => {
            if (!props.inputOcupied) {
              setClicked(true);
              props.handleOcupie();
            }
          }}
        >
          {children}
        </button>
      ) : (
        <div>
          {" "}
          <input
            autoFocus
            value={value}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setClicked(false);
                handleAdd(e.target.value);
                setValue("");
                props.handleOcupie();
              }
            }}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      )}
    </>
  );
};
