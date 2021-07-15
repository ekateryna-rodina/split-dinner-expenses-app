import React from 'react';

const NumericalInput = (props) => {
    const {iconClass} = props;
    return (
        <div className='numerical-input-container'>
        <label>
            <input className={`numerical-input ${iconClass}`} type="number" pattern="[0-9]" />
        </label>       
        </div>
    )
}

export default NumericalInput;

