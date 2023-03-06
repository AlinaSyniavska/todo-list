import React, {FC} from "react";

import style from './HeaderTodoList.module.css';

const HeaderTodoList: FC = React.memo( () => {
    console.log('HeaderTodoList')
    return (
        <div className={style.container}>
            <div>ID</div>
            <div>TITLE</div>
            <div>DESCRIPTION</div>
            <div>STATUS</div>
        </div>
    );
});

export {HeaderTodoList};