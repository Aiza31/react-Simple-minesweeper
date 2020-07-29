import React from "react";
import "./Block.css";

export const Block = (props) => {
  return (
    <div onClick={props.lick} className={props.nameClass}>
      <p>{props.val}</p>
    </div>
  );
};
