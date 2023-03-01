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
            title.current?.classList.add('errorInput');
            setTitleError();
        } else {
            title.current?.classList.remove('errorInput');
            cleanTitleError();
        }

        if (description.current?.value.trim() === '') {
            description.current?.classList.add('errorInput');
            setDescriptionError();

        } else {
            description.current?.classList.remove('errorInput');
            cleanDescriptionError();
        }
    };

    const cleanForm = () => {
        form.current?.reset();
    };

    const setTitleError = () => {
        errorTitle.current?.classList.add('errorBox');
    };

    const setDescriptionError = () => {
        errorDescription.current?.classList.add('errorBox');
    };

    const cleanTitleError = () => {
        errorTitle.current?.classList.remove('errorBox');
    };

    const cleanDescriptionError = () => {
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


