import React, { useImperativeHandle, useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header.js"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header darkMode = {isDarkMode} onDarkModeClick={handleDarkModeClick} /> 
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
