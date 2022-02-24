import React from "react";
import "./TodoItem.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <AiFillCheckCircle />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <MdCancel />
      </span>
    </li>
  );
}

export { TodoItem };
