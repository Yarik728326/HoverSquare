import React, { memo } from 'react';
import styles from './button.module.scss';

export const Button = memo(({caption, action}) => {
    return <button className={styles.wrapper} onClick={action}>{caption}</button>
})