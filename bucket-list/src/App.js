import React, { useState, useEffect } from "react";
import "./App.css";
import WishForm from "./components/WishForm";
import WishList from "./components/WishList";

function App() {

  const [input, setInput] = useState("");
  const [wishes, setWishes] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredWishes, setFilteredWishes] = useState([]);

  const LOCAL_STORAGE_KEY = "wishes";

  useEffect(() => {
    filteredHandler();
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(wishes));
  }, [wishes, status]);

  useEffect(() => {
    const wishLocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(wishLocal){
      setWishes(wishLocal);
    }
  }, [])

  const filteredHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredWishes(wishes.filter(wish => wish.completed === true));
        break;
      case 'uncompleted':
        setFilteredWishes(wishes.filter(wish => wish.completed === false));
        break;
      default:
        setFilteredWishes(wishes);
        break;
    }
  };

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
        setStatus={setStatus}
      />
      <WishList
        wishes={wishes}
        setWishes={setWishes}
        filteredWishes={filteredWishes}
      />
    </div>
  );
}

export default App;
