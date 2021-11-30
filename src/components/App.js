import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import RenderHeader from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function handleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <RenderHeader onDarkModeClick={handleDarkMode} darkMode={isDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
