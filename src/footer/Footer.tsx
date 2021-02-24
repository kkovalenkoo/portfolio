import React from 'react';
import style from './Footer.module.css';
import stContainer from '../commonFile/styles/Container.module.css';


export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${stContainer.container} ${style.container}`}>
                <h3 className={style.title}>Юра Коваленко</h3>
                <div className={style.footer}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <h3>© 2021 Все права защищены</h3>
            </div>
        </div>
    );
}