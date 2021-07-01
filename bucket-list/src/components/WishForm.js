import React from "react";
import uuid from "uuid";

const WishForm = ({setInput, wishes, setWishes, input}) => {

    const inputHandler = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    };

    const submitWishHandler = (e) => {
        e.preventDefault();
        setWishes([
            ...wishes, {text: input, completed: false, id: uuid.v4()}
        ]);
        setInput("");
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
                <select name="wishes" className="filter-wish">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default WishForm;