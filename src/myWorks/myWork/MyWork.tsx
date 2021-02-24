import React from 'react';
import style from './MyWork.module.css';

type MyWorkPropsType = {
    nameProject: string
    description: string
}

export function MyWork(props: MyWorkPropsType) {
    return (
        <div className={style.work}>
            <div className={style.imgContainer}>
                <button><a>Смотреть</a></button>
            </div>
            <div className={style.projectName}>{props.nameProject}</div>
            <div className={style.description}>{props.description}</div>
        </div>
    );
}