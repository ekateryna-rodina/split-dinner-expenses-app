import React from 'react';

const NumericalInput = (props) => {
    const {iconClass} = props;
    return (
        <>
        <label>
            <input className={`numerical-input wide ${iconClass}`} type="number" pattern="[0-9]" />
        </label>       
        </>
    )
}

export default NumericalInput;

