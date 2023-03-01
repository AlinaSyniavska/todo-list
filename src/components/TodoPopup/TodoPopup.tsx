import {FC} from "react";

import {ITodo} from "../../interfaces";
import style from './TodoPopup.module.css';

interface IProps {
    todo: ITodo,
    setIsOpen: Function,
}

const TodoPopup: FC<IProps> = ({todo, setIsOpen}) => {
    const {title, description, status} = todo;

    const closeTodoPopup = () => {
        setIsOpen(false);
    };

    return (
        <div className={style.popupBox}>
            <div className={style.box}>
                <h5 className={style.todoTitle}>{title}</h5>
                <p><strong>Description:</strong></p>
                <div className={style.todoDescription}>{description}</div>
                <div>
                    <label>Status:
                        <input type={'checkbox'} defaultChecked={status}/>
                    </label>
                </div>

                <button className={style.todoBtnClose} onClick={closeTodoPopup}>Close</button>
            </div>
        </div>
    );
};

export {TodoPopup};
