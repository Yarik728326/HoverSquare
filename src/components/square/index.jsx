import React from 'react';
import { useDispatch } from "react-redux";
import { hoverHandler } from "../../store/appDataSlice";

import styles from './square.module.scss'

export const Square = ({ index, isActive }) => {
    const dispatch = useDispatch();
    const handlerHover = () => {
        dispatch(hoverHandler(index))
    }
    const currentStyles = [styles.wrapper, isActive ? styles.blue : ''].filter(Boolean).join(' ');
    return (
        <div
            className={currentStyles}
            onMouseEnter={handlerHover}
        />
    )
}