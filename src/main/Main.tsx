import React from 'react';
import style from './Main.module.css';
import stContainer from '../commonFile/styles/Container.module.css';

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={stContainer.container}>
                <div className={style.greeting}>
                    <span>Hi There</span>
                    <h1>I am Yury Kovalenko</h1>
                    <p>FrontEnd Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

