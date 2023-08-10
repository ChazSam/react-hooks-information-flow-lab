 import React from "react";

function NewHeader({onDarkModeClick}) {
    console.log(onDarkModeClick)
    return (
    <header>
        <h2>Shopster</h2>
        <button onClick = {onDarkModeClick}>
            {onDarkModeClick ? "Dark" : "Light"} Mode
        </button>
    </header>
        )
    }

export default NewHeader
