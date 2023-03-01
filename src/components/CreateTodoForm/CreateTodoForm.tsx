import {FC} from "react";

import {todoListActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";
import style from './CreateTodoForm.module.css';
import '../../App.css';

const CreateTodoForm: FC = () => {
    const {todos} = useAppSelector(state => state.todoListReducer);
    const dispatch = useAppDispatch();
    const message = 'This field is empty';

    const checkFields = () => {
        const titleInput = document.getElementById('title') as HTMLInputElement;
        const descriptionInput = document.getElementById('description') as HTMLInputElement;

        if (titleInput.value.trim() === '') {
            titleInput.classList.add('errorInput');
            setTitleError();
        } else {
            titleInput.classList.remove('errorInput');
            cleanTitleError();
        }

        if (descriptionInput.value.trim() === '') {
            descriptionInput.classList.add('errorInput');
            setDescriptionError();

        } else {
            descriptionInput.classList.remove('errorInput');
            cleanDescriptionError();
        }
    };

    const cleanForm = () => {
        const titleInput = document.getElementById('title') as HTMLInputElement;
        const descriptionInput = document.getElementById('description') as HTMLInputElement;

        titleInput.value = '';
        descriptionInput.value = '';
    };

    const setTitleError = () => {
        const errorTitle = document.getElementById('errorTitle') as HTMLDivElement;
        errorTitle.classList.add('errorBox');
    };

    const setDescriptionError = () => {
        const errorDescription = document.getElementById('errorDescription') as HTMLDivElement;
        errorDescription.classList.add('errorBox');
    };

    const cleanTitleError = () => {
        const errorTitle = document.getElementById('errorTitle') as HTMLDivElement;
        errorTitle.classList.remove('errorBox');
    };

    const cleanDescriptionError = () => {
        const errorDescription = document.getElementById('errorDescription') as HTMLDivElement;
        errorDescription.classList.remove('errorBox');
    };

    const submitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        const titleInput = document.getElementById('title') as HTMLInputElement;
        const descriptionInput = document.getElementById('description') as HTMLInputElement;

        event.preventDefault();

        checkFields();

        if (titleInput.value.trim() === '' || descriptionInput.value.trim() === '') {
            return;
        }

        const newTodo = {
            id: todos.length ? todos.length + 1 : 1,
            title: titleInput.value,
            description: descriptionInput.value,
            status: false,
        }

        dispatch(todoListActions.createTodo({todo: newTodo}))
        cleanForm();
    }

    return (
        <form className={style.form}>
            <div>
                <label>Title:</label>
                <input id={'title'} type={'text'} placeholder={'Enter title'} onChange={cleanTitleError}/>
                <div id={'errorTitle'} className={'errorBoxEmpty'}>{message}</div>
            </div>
            <div>
                <label>Description:</label>
                <input id={'description'} type={'text'} placeholder={'Enter description'} onChange={cleanDescriptionError}/>
                <div id={'errorDescription'} className={'errorBoxEmpty'}>{message}</div>
            </div>

            <button onClick={submitForm}>Create</button>
        </form>
    );
};

export {CreateTodoForm};


