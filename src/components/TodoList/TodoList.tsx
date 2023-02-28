import {FC} from "react";
import {HeaderTodoList} from "../HeaderTodoList/HeaderTodoList";
import {useAppSelector} from "../../hooks";
import {Todo} from "../Todo/Todo";

const TodoList: FC = () => {
    const {todos} = useAppSelector(state => state.todoListReducer);

    return (
        <div>
            <HeaderTodoList/>
            {
                todos.map((todo, index) => <Todo key={index} todo={todo} index={index+1}/>)
            }
        </div>
    );
};

export {TodoList};
