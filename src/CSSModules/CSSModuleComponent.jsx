import React from "react";
import classes from "./CSSModuleComponent.module.css"

export const CSSModuleComponent = ({
    children = "Hello",
    onClick
}) => {
    return <button className={classes.button} onClick={onClick}>{children}</button>
}
