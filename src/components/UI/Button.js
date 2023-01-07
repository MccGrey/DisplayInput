import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div
      className={classes.button}
      type={props.type || "button"}
      onclick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Button;
