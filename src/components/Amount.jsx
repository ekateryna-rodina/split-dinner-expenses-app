import PropTypes from 'prop-types';
import React from 'react';

const Amount = (props) => {
    return (
        <div className='amount-row m-bottom-1'>
            <div className='label'>
                <div>{props.label}</div>
                <div className='per-person'>/ person</div>
            </div>
            <div>{`$${props.value === 0 ? "0.00" : props.value.toFixed(2).toString()}`}</div>
        </div>
    )
}

Amount.propTypes = {
    value: PropTypes.number,
    label: PropTypes.string
}

export default Amount
