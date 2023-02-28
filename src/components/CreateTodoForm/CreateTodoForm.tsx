import {FC} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {ITodo} from "../../interfaces";
import {todoValidator} from "../../validators";

const CreateTodoForm: FC = () => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm<ITodo>({
        resolver: joiResolver(todoValidator),
        mode: "all"
    });

    const submitForm = async (todo: ITodo) => {
        try {
            const newTodo = {
                title: todo.title,
                description: todo.description,
            }

            console.log(newTodo);

            // dispatch(todoActions.createTodo({todo: newTodo}))

            reset();
        } catch (e: any) {
            console.log(e.response.data());
        }
    }

    return (
        <form className={""} onSubmit={handleSubmit(submitForm)}>
            <label className={""}>Title:</label>
            <input type={'text'} placeholder={'Enter title'} {...register('title')}/>
            <div className={""}>{errors.title && <span>{errors.title.message}</span>}</div>
            <label className={""}>Description:</label>
            <input type={'text'} placeholder={'Enter description'} {...register('description')}/>
            <div className={"errorBox"}>{errors.description && <span>{errors.description?.message}</span>}</div>

            <button className={""}>Create</button>
        </form>
    );
};

export {CreateTodoForm};


