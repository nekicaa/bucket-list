import React from "react";

const Wish = ({ wishes, setWishes, wish }) => {
    const deleteHandler = () => {
        setWishes(wishes.filter((el) => el.id !== wish.id))
    };

    const completeHandler = () => {
        setWishes(wishes.map((item) => {
            if(item.id === wish.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };

    return(
        <div className="wish">
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <li className={`wish-item  ${wish.completed ? "completed" : ""}`}>{wish.text}</li>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Wish;