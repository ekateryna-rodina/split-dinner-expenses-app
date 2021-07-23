import PropTypes from 'prop-types';
import React from 'react';
import Amount from './Amount';

const TotalAmount = (props) => {
    return <Amount label='Total' value={props.value}/>
}

TotalAmount.propTypes = {
    value: PropTypes.number
}
export default TotalAmount
