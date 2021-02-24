import React from 'react';
import style from './Telework.module.css'
import stContainer from '../commonFile/styles/Container.module.css';


export function Telework() {
    return (
        <div className={style.teleworkBlock}>
            <div className={`${stContainer.container} ${style.container}`}>
                <h3 className={style.title}>I consider options for remote operation</h3>
                <button><a>Нанять</a></button>
            </div>
        </div>
    );
}