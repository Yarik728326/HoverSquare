import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Square } from "../square";
import { fetchData, startHandler } from "../../store/appDataSlice";
import { DropDown } from "../dropDown";
import { Button } from "../button";
import { HoverCount } from "../hoverSquare";

import styles from './app.module.scss'

export const App = () => {
    const dispatch = useDispatch();
    const { data, status, fields } = useSelector(state => state.data)
    const [currentField, setCurrentField] = useState({
        name: 'Pick mode',
        field: 0
    })

    const handleOptions = field => {
        field.name !== currentField.name && setCurrentField(field)
    }

    const startGame = useCallback(() => {
        currentField['field'] > 0 && dispatch(startHandler(currentField['field']))
    },[currentField, dispatch])

    useEffect(() => {
        dispatch(fetchData())
    },[dispatch])

    if(status === 'loading') return <h2>loading ...</h2>
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <DropDown
                        options={data}
                        currentField={currentField.name}
                        setOptions={handleOptions}
                    />
                    <Button caption={'START'} action={startGame} />
                </div>
                {
                    fields.length > 0 &&
                    <div className={styles.wrapper}>
                        {
                            fields.map(({isActive}, index) => {
                                return <Square key={index + '_field'} index={index} isActive={isActive} />
                            })
                        }
                    </div>
                }
            </div>
            <HoverCount/>
        </div>
    )
}