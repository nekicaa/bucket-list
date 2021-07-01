import React, { useState, useEffect } from "react";
import "./App.css";
import WishForm from "./components/WishForm";
import WishList from "./components/WishList";

function App() {

  const [input, setInput] = useState("");
  const [wishes, setWishes] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredWishes, setFilteredWishes] = useState([]);

  useEffect(() => {
    filteredHandler();
    saveLocalWishes();
  }, [wishes, status]);

  useEffect(() => {
    getLocalWishes();
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

  //save local
  const saveLocalWishes = () => {
    localStorage.setItem("wishes",JSON.stringify(wishes));
  };
  const getLocalWishes = () => {
    if(localStorage.getItem("wishes") === null){
      localStorage.setItem("wishes",JSON.stringify([]));
    }else{
      let wishLocal = JSON.parse(localStorage.getItem("wishes"));
      setWishes(wishLocal);
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
