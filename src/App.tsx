import {FC} from "react";

import {CreateTodoForm, TodoList} from "./components";
import './App.css';

const App: FC = () => {
    return (
        <div>
            <CreateTodoForm/>
            <TodoList/>
        </div>
    );
};

export {App};

