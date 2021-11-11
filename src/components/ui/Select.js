import React from 'react'
import './Select.css'

const Select = (props) => {
    return (
        <select className='select' onChange={props.onChange} value={props.value}>
            {props.children}
        </select>
    )
}

export default Select
