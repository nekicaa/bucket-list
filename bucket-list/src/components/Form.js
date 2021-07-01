import React from "react";

const Form = () => {
    return(
        <form>
            <input type="text" className="wish-input" />
            <button className="wish-button" type="submit">
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

export default Form;