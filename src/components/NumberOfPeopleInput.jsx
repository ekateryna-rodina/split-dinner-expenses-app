import PropTypes from 'prop-types';
import React from 'react';
import NumericalInput from './NumericalInput';

const NumberOfPeopleInput = (props) => {
    const {onChangeHandler} = props;

    return <NumericalInput value={props.value} allowFloat={false} iconClass='person-icon' onChangeHandler={onChangeHandler}/>
}

NumberOfPeopleInput.propTypes = {
    onChangeHandler: PropTypes.func,
    value: PropTypes.number
}

export default NumberOfPeopleInput
