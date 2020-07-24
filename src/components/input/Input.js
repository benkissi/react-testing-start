import React from 'react'

import styles from './Input.module.css'

function Input ({onInputChange, placeholder, value}) {
    const handleInputChange = (event) => {
        const inputValue = event.target.value
        onInputChange(inputValue)
    }

    return (
        <div className={styles.wrapper}>
            <input placeholder={placeholder} className={styles.input} value={value} onChange={handleInputChange}/>
        </div>
    )
}

export default Input