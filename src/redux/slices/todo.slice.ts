import {createSlice} from "@reduxjs/toolkit";

import {ITodo} from "../../interfaces";

interface IState {
    todos: ITodo[],
}

const initialState: IState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        createTodo: (state, action) => {
            const note = action.payload.note;
            state.todos.push(note);
        },

    },

});

const {reducer: todoListReducer, actions: {createTodo}} = todoSlice;

const todoListActions = {
    createTodo,
};

export {
    todoListReducer,
    todoListActions,
}
