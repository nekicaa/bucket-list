import React from "react";
import nextId from "react-id-generator";

const WishForm = ({setInput, wishes, setWishes, input, setStatus}) => {

    const inputHandler = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    };

    const submitWishHandler = (e) => {
        e.preventDefault();
        setWishes([
            ...wishes, {text: input, completed: false, id: nextId()}
        ]);
        setInput("");
    };

    const filterHandler = (e) => {
        setStatus(e.target.value);
    };

    return(
        <form>
            <input 
                value={input} 
                onChange={inputHandler} 
                type="text" 
                className="wish-input" 
            />
            <button onClick={submitWishHandler} className="wish-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={filterHandler} name="wishes" className="filter-wish">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default WishForm;