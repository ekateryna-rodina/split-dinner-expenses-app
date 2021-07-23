import PropTypes from 'prop-types';
import React from 'react';

const Reset = (props) => {
    const {onReset} = props
    return (
        <button type="button" className='reset-button' onClick={onReset}>
            RESET
        </button>
    )
}

Reset.propTypes = {
    onReset: PropTypes.func
}
export default Reset
