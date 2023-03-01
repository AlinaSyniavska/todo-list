import {createSlice} from "@reduxjs/toolkit";

import {ITodo} from "../../interfaces";

interface IState {
    todos: ITodo[],
}

const initialState: IState = {
    todos: [],
};

const todoListSlice = createSlice({
    name: 'todoListSlice',
    initialState,
    reducers: {
        createTodo: (state, action) => {
            const todo = action.payload.todo;
            state.todos.push(todo);
        },
        updateTodo: (state, action) => {
            const todo = action.payload.todo;

            const newTodoIndex = state.todos.findIndex(item => item.id === todo.id);
            state.todos.splice(newTodoIndex, 1, todo);
        },

    },

});

const {reducer: todoListReducer, actions: {createTodo, updateTodo}} = todoListSlice;

const todoListActions = {
    createTodo,
    updateTodo,
};

export {
    todoListReducer,
    todoListActions,
}
