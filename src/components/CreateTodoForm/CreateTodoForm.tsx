import {FC, useRef} from "react";

import {todoListActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";
import style from './CreateTodoForm.module.css';
import '../../App.css';

const CreateTodoForm: FC = () => {
    const {todos} = useAppSelector(state => state.todoListReducer);
    const dispatch = useAppDispatch();

    const form = useRef<HTMLFormElement>(null);
    const title = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);
    const errorTitle = useRef<HTMLDivElement>(null);
    const errorDescription = useRef<HTMLDivElement>(null);

    const message = 'This field is empty';

    const checkFields = () => {
        if (title.current?.value.trim() === '') {
            setTitleError();
        } else {
            cleanTitleError();
        }

        if (description.current?.value.trim() === '') {
            setDescriptionError();

        } else {
            cleanDescriptionError();
        }
    };

    const cleanForm = () => {
        form.current?.reset();
    };

    const setTitleError = () => {
        title.current?.classList.add('errorInput');
        errorTitle.current?.classList.add('errorBox');
    };

    const setDescriptionError = () => {
        description.current?.classList.add('errorInput');
        errorDescription.current?.classList.add('errorBox');
    };

    const cleanTitleError = () => {
        title.current?.classList.remove('errorInput');
        errorTitle.current?.classList.remove('errorBox');
    };

    const cleanDescriptionError = () => {
        description.current?.classList.remove('errorInput');
        errorDescription.current?.classList.remove('errorBox');
    };

    const submitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        checkFields();

        if (title.current?.value.trim() === '' || description.current?.value.trim() === '') {
            return;
        }

        const newTodo = {
            id: todos.length ? todos.length + 1 : 1,
            title: title.current?.value,
            description: description.current?.value,
            status: false,
        }

        dispatch(todoListActions.createTodo({todo: newTodo}))
        cleanForm();
    }

    return (
        <form ref={form} className={style.form}>
            <div>
                <label>Title:</label>
                <input ref={title} type={'text'} placeholder={'Enter title'} onChange={cleanTitleError}/>
                <div ref={errorTitle} className={'errorBoxEmpty'}>{message}</div>
            </div>
            <div>
                <label>Description:</label>
                <input ref={description} type={'text'} placeholder={'Enter description'} onChange={cleanDescriptionError}/>
                <div ref={errorDescription} className={'errorBoxEmpty'}>{message}</div>
            </div>

            <button onClick={submitForm}>Create</button>
        </form>
    );
};

export {CreateTodoForm};


