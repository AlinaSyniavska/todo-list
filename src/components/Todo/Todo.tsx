import {FC} from "react";
import {ITodo} from "../../interfaces";

interface IProps {
    todo: ITodo,
}

const Todo: FC<IProps> = ({todo}) => {
    return (
        <div>
            Todo
        </div>
    );
};

export {Todo};