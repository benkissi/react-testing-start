import React from 'react'
import PropTypes from 'prop-types';

import styles from './Input.module.css'

const Input =  React.forwardRef(({onInputChange, placeholder, value}, ref) => {
    const handleInputChange = (event) => {
        const inputValue = event.target.value
        onInputChange(inputValue)
    }

    return (
        <div className={styles.wrapper}>
            <input placeholder={placeholder} className={styles.input} value={value} onChange={handleInputChange} tabIndex={1} ref={ref}/>
        </div>
    )
})

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired
}

Input.defaultProps = {
    placeholder: 'Sample Placeholder',
    value: '',
    onInputChange: () => {console.log('input changed')}
}

export default Input