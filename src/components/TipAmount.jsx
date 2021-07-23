import PropTypes from 'prop-types';
import React from 'react';
import Amount from './Amount';


const TipAmount = (props) => {
    return (<div className="m-top-1">
        <Amount label='Tip Amount' value={props.value}/>
    </div>)
    
}

TipAmount.propTypes ={
    value: PropTypes.number
}
export default TipAmount
