import React, {FC} from "react";

import {HeaderTodoList} from "../HeaderTodoList/HeaderTodoList";
import {useAppSelector} from "../../hooks";
import {Todo} from "../Todo/Todo";

const TodoList: FC = React.memo( () => {
    console.log('TodoList')
    const {todos} = useAppSelector(state => state.todoListReducer);

    return (
        <div>
            <HeaderTodoList/>
            {
                todos.map((todo) => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
});

export {TodoList};
