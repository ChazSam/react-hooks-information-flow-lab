import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import NewHeader from "./Header";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      {/* <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header> */}
      <NewHeader onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
