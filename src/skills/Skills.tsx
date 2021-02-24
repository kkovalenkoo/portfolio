import React from 'react';
import style from './Skills.module.css';
import stContainer from '../commonFile/styles/Container.module.css';
import {Skill} from './skill/Skill';


export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${stContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'HTML&CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cum cumque dolore dolores eos, illo impedit mollitia natus, non optio pariatur placeat possimus quas quod, quos reprehenderit rerum saepe ullam!'}/>
                    <Skill title={'JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cum cumque dolore dolores eos, illo impedit mollitia natus, non optio pariatur placeat possimus quas quod, quos reprehenderit rerum saepe ullam!'}/>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cum cumque dolore dolores eos, illo impedit mollitia natus, non optio pariatur placeat possimus quas quod, quos reprehenderit rerum saepe ullam!'}/>
                </div>
            </div>
        </div>
    );
}

