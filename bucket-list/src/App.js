import React, { useState } from "react";
import "./App.css";
import WishForm from "./components/WishForm";
import WishList from "./components/WishList";

function App() {
  const [input, setInput] = useState("");
  const [wishes, setWishes] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Nevena's summer bucket list</h1>
      </header>
      <WishForm 
        input={input}
        wishes={wishes} 
        setWishes={setWishes} 
        setInput={setInput} 
      />
      <WishList
        wishes={wishes}
        setWishes={setWishes}
      />
    </div>
  );
}

export default App;
