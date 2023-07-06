import { useState } from "react";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import "./App.css";

//make it so when ever it switch to an input tag it auto focus on it

export function Project({
  props,
  handleClick,
  handleDelete,
  handleChange,
  handleOcupie,
  isOcupied,
  isactive,
}) {
  const testing = props.name;
  const [value, setValue] = useState(testing);
  const style =
    isactive === props.id
      ? { backgroundColor: "#231f20", color: "#f2eeeb" }
      : {};
  const [li, setLI] = useState(true);
  return (
    <>
      {li ? (
        <li style={style} className="pContainer">
          <div className="Playout">
            <span onClick={() => handleClick(props.id)}>{props.name}</span>
            <div>
              {" "}
              <FaEdit
                onClick={() => {
                  if (!isOcupied) {
                    setLI(!li);
                    handleOcupie();
                  }
                }}
              />{" "}
              <FaTrash
                onClick={() => {
                  handleDelete(props.id);
                }}
              />
            </div>
          </div>
        </li>
      ) : (
        <li>
          <div className="Playout">
            <input
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleChange(value, props.id, "proId");
                  setLI(!li);
                  handleOcupie();
                }
              }}
              value={value}
              type="text"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <FaCheck
              onClick={() => {
                handleChange(value, props.id, "proId");
                setLI(!li);
                handleOcupie();
              }}
            />
          </div>
        </li>
      )}
    </>
  );
}
