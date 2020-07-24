import React, {useState, useEffect} from 'react'

import styles from './Input.module.css'

function Input (props) {
    const [value, setValue] = useState('')
    const {onInputChange} = props

    useEffect(() => {
        onInputChange(value)
    }, [value])


    const handleInputChange = (event) => {
        const inputValue = event.target.value
        setValue(inputValue)
    }

    return (
        <div className={styles.wrapper}>
            <input placeholder={props.placeholder} className={styles.input} value={value} onChange={handleInputChange}/>
        </div>
    )
}

export default Input