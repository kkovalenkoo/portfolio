import React from 'react';
import style from './Contacts.module.css';
import stContainer from '../commonFile/styles/Container.module.css';


export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${stContainer.container} ${style.container}`}>
                <h3 className={style.title}>Contacts</h3>
                <form className={style.form}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea></textarea>
                </form>
                <button><a>Отправить</a></button>
            </div>
        </div>
    );
}