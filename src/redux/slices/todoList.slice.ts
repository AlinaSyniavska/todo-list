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

    },

});

const {reducer: todoListReducer, actions: {createTodo}} = todoListSlice;

const todoListActions = {
    createTodo,
};

export {
    todoListReducer,
    todoListActions,
}
