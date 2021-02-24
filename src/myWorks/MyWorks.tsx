import React from 'react';
import stContainer from '../commonFile/styles/Container.module.css';
import style from './MyWorks.module.css';
import {MyWork} from './myWork/MyWork';

const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

export function MyWorks() {
    return (
        <div className={style.myWorksBlock}>
            <div className={`${stContainer.container} ${style.myWorkContainer}`}>
                <h3 className={style.title}>My Works</h3>
                <div className={style.myWorks}>
                    <MyWork nameProject={'Social NetWork'} description={description}/>
                    <MyWork nameProject={'Todolist'} description={description}/>
                    <MyWork nameProject={'Counter'} description={description}/>
                </div>
            </div>
        </div>
    );
}