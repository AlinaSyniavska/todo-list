import React, {FC, useState} from "react";
import {ITodo} from "../../interfaces";
import style from "./Todo.module.css";

interface IProps {
    todo: ITodo,
    index: number,
}

const Todo: FC<IProps> = ({todo, index}) => {
    const {title, description} = todo;
    const [status, setStatus] = useState<boolean>(false);

    const checkStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);


        setStatus(event.target.checked);
    }

    return (
        <div className={style.container}>
            <div>{index}</div>
            <div>{title}</div>
            <div>{description}</div>
            <div>
                <input type={'checkbox'} onChange={checkStatus}/>
            </div>
        </div>
    );
};

export {Todo};