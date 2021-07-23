import PropTypes from 'prop-types';
import React from 'react';

const NumericalInput = (props) => {
    const {iconClass, onChangeHandler, allowFloat} = props;
    return (
        <>
        <label>
            <input 
            value={Number(props.value).toString()} 
            min={allowFloat ? 0 : 1} 
            className={`numerical-input wide ${iconClass}`} 
            type="number" 
            pattern="/^[0-9]+$/" 
            onChange={(e) => onChangeHandler(allowFloat ? +e.target.value : Math.floor(e.target.value))} />
        </label>       
        </>
    )
}



NumericalInput.propTypes = {
    iconClass: PropTypes.string,
    onChangeHandler: PropTypes.func,
    allowFloat: PropTypes.bool
}
export default NumericalInput;

