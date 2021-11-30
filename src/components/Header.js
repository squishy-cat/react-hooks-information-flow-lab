import React from "react";

function RenderHeader( {onDarkModeClick, darkMode}) {
    return (
        <div>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
            {darkMode ? "Dark" : "Light"} Mode
            </button>
        </div>
    )
}

export default RenderHeader;