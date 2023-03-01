import React, {FC, useState} from "react";
import {ITodo} from "../../interfaces";
import style from "./Todo.module.css";

interface IProps {
    todo: ITodo,
}

const Todo: FC<IProps> = ({todo}) => {
    const {id, title, description, status} = todo;
    const [todoStatus, setTodoStatus] = useState<boolean>(false);

    const checkStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);


        setTodoStatus(event.target.checked);
    }

    return (
        <div className={style.container}>
            <div>{id}</div>
            <div>{title}</div>
            <div>{description}</div>
            <div>
                <input type={'checkbox'} defaultChecked={status} onChange={checkStatus}/>
            </div>
        </div>
    );
};

export {Todo};