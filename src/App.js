import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState([]);

  const handleClick = value => {
    setDisplay(value);
    setExpression([...expression, value]);
  };
}

export default App;
