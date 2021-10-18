import React, {useState} from "react";
import classNames from "classnames";

import classes from "./CSSModuleComponent.module.css"

export const CSSModuleComponent = () => {
    const [isOpened, setIsOpened] = useState(false)
    return (
        <button
            className={classNames(classes.button, {[classes.opened]: isOpened})}
            onClick={() => setIsOpened(val => !val)}
        >
        {isOpened ? "opened" : "closed"}
    </button>
    )
}
