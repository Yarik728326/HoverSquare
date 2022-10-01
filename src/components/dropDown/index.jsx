import React, { useState } from 'react';
import { ArrowDown, ArrowUp } from "../../icons/arrows";

import styles from './dropDown.module.scss'

export const DropDown = ({options, currentField , setOptions}) => {
    const [isOpened, setIsOpened] = useState(false);
    const openHandler = () => setIsOpened(!isOpened)
    const myOptions = isOpened && <div className={styles.options}>
        {
            options?.map((option) => {
                const { name } = option
                return (
                    <div
                        className={styles.option}
                        key={name}
                        onClick={() => setOptions(option)}
                    >
                        {name}
                    </div>
                )
            })
        }
    </div>
    const currentArrow = isOpened ? <ArrowUp/> : <ArrowDown/>
    return (
        <div
            onClick={openHandler}
            className={styles.wrapper}
        >
            <span className={styles.currentOption}>{currentField}</span>
            {myOptions}
            <div className={styles.prefix}> {currentArrow} </div>
        </div>
    )
}