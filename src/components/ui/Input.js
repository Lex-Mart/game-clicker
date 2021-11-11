import React from 'react'
import './Input.css'

const Input = (props) => {
    return (
        <input
            className='input'
            type='number'
            min={props.min}
            max={props.max}
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default Input
