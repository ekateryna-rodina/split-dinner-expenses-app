import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const TipInput = (props) => {
    const {amount, setTip, tip} = props;
    const [custom, setCustom] = useState(0);
    const [fixed, setFixed] = useState(0)
    useEffect(() => {
        setTip(custom);
        // eslint-disable-next-line
    }, [custom])
    useEffect(() => {
        setTip(+(fixed * amount / 100).toFixed(1));
        // eslint-disable-next-line
    }, [fixed, amount])
    const tips = [5, 10, 15, 25, 50, -1];
    const onFixedChangeHandler = (value)=> {
        setFixed(value);
    }
    return (
        <>
            {tips.map((t, i) => {
              if (t === -1) {
                return (
                  <input key={t.toString()} className="tip-box input dollar-icon" value={tip} onChange={(e) => setCustom(e.target.value)}></input>
                );
              } else {
                return (
                  <div key={t.toString()} className={`tip-box button ${t === fixed ? 'selected' : ''}`} onClick={() => onFixedChangeHandler(t)}>
                    {`${t}%`}
                  </div>
                );
              }
            })}
        </>
    )
}
TipInput.propTypes = {
    setTip: PropTypes.func,
    amount: PropTypes.number,
    tip: PropTypes.number
}
export default TipInput
