import {FC} from "react";
import {ITodo} from "../../interfaces";
import style from "./Todo.module.css";

interface IProps {
    todo: ITodo,
    index: number,
}

const Todo: FC<IProps> = ({todo, index}) => {
    const {title, description} = todo;

    return (
        <div className={style.container}>
            <div>{index}</div>
            <div>{title}</div>
            <div>{description}</div>
            <div>
                <input type={'checkbox'}/>
            </div>
        </div>
    );
};

export {Todo};