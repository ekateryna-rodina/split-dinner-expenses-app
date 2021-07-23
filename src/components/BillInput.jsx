import PropTypes from 'prop-types';
import React from 'react';
import NumericalInput from './NumericalInput';

const BillInput = (props) => {
    const {onChangeHandler} = props;
    return <NumericalInput value={props.value} iconClass='dollar-icon' allowFloat={true} onChangeHandler={onChangeHandler}/>
}
BillInput.propTypes = {
    onChangeHandler: PropTypes.func,
    value: PropTypes.number
}
export default BillInput
