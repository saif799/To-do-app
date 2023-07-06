import { FaCheck, FaTrash } from "react-icons/fa";

export function Tasks({ props, handleIsDone, handleDelete }) {
  const isdone = props.done ? { textDecoration: "line-through" } : {};
  return (
    <div className="block" style={isdone}>
      <h3>{props.name}</h3>
      <div className="style-btn" >
        <FaCheck onClick={() => handleIsDone(props.taskId)} />
        <FaTrash onClick={() => handleDelete(props.taskId)} />
      </div>
    </div>
  );
}
