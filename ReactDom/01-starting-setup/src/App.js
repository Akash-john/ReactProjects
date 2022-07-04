import React, { useCallback, useState } from "react";

import Button from "./components/UI/Button/Button";

import "./App.css";
import Demo from "./components/Demo/Demo";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("App is Running");

  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle((prevState) => !prevState);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
