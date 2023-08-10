 import React from "react";

function NewHeader({onDarkModeClick, isDarkMode}) {
    console.log(onDarkModeClick)
    return (
    <header>
        <h2>Shopster</h2>
        <button onClick = {onDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
        )
    }

export default NewHeader
