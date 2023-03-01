import React, {FC, useRef, useState} from "react";
import {ITodo} from "../../interfaces";
import style from "./Todo.module.css";
import {TodoPopup} from "../TodoPopup/TodoPopup";
import {useAppDispatch} from "../../hooks";
import {todoListActions} from "../../redux";

interface IProps {
    todo: ITodo,
}

const Todo: FC<IProps> = ({todo}) => {
    const {id, title, description, status} = todo;
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const checkboxStatus = useRef<HTMLInputElement>(null);

    const changeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTodo = Object.assign({}, todo);
        newTodo.status = event.target.checked;

        dispatch(todoListActions.updateTodo({todo: newTodo}));
    }

    const togglePopup = (event: React.MouseEvent<HTMLElement>) => {
        if (event.target === checkboxStatus.current) {
            return;
        }

        setIsOpen(!isOpen);
    }

    return (
        <React.Fragment>
            <div className={style.container} onClick={togglePopup}>
                <div>{id}</div>
                <div>{title}</div>
                <div>{description}</div>
                <div>
                    <input ref={checkboxStatus} type={'checkbox'} defaultChecked={status} onChange={changeStatus}/>
                </div>
            </div>

            {isOpen && <TodoPopup todo={todo} setIsOpen={setIsOpen}/>}
        </React.Fragment>

    );
};

export {Todo};