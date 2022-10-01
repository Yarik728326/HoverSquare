import React from 'react';
import { useSelector } from "react-redux";

import styles from './hoverCount.module.scss';

export const HoverCount = () => {
    const { fields } = useSelector(state => state.data);
    const ownFields = fields.filter((element => element.isActive));
    return (
        <div >
            <h1>Hover Squares</h1>
            <div className={styles.wrapper}>
                {
                    ownFields.length > 0 && ownFields.map(({ position }) => {
                        const row = position % 4 === 0 ? position / 4 : Math.floor(position / 4 + 1);
                        const col = position <= 4 ? position : position % 4 === 0 ? 4 : position % 4;
                        return (
                            <div key={position} className={styles.info}>
                                <span>row: {row}</span>
                                <span>col: {col}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}