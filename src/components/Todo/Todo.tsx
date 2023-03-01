import React, {FC, useState} from "react";
import {ITodo} from "../../interfaces";
import style from "./Todo.module.css";
import {TodoPopup} from "../TodoPopup/TodoPopup";

interface IProps {
    todo: ITodo,
}

const Todo: FC<IProps> = ({todo}) => {
    const {id, title, description, status} = todo;
    const [todoStatus, setTodoStatus] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const checkStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);
        setTodoStatus(event.target.checked);
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <React.Fragment>
            <div className={style.container} onClick={togglePopup}>
                <div>{id}</div>
                <div>{title}</div>
                <div>{description}</div>
                <div>
                    <input type={'checkbox'} defaultChecked={status} onChange={checkStatus}/>
                </div>
            </div>

            {isOpen && <TodoPopup todo={todo} setIsOpen={setIsOpen}/>}
        </React.Fragment>

    );
};

export {Todo};