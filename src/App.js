import React, { useEffect, useRef, useState } from "react";
import BillInput from "./components/BillInput";
import NumberOfPeopleInput from "./components/NumberOfPeopleInput";
import Reset from "./components/Reset";
import TipAmount from "./components/TipAmount";
import TipInput from "./components/TipInput";
import TotalAmount from "./components/TotalAmount";
function App() {
  const [people, setPeople] = useState(1);
  const [amount, setAmount] = useState(0);
  const [tip, setTip] = useState(0);
  const [totalTip, setTotalTip] = useState(0);
  const [total, setTotal] = useState(0);

  let numRef = useRef();
  useEffect(() => {
    if (!people || !total) return;
    setTotalTip(tip / people);
    setTotal((amount + tip) / people);
    // eslint-disable-next-line
  }, [people]);
  useEffect(() => {
    setTotal((amount + tip) / people);
    // eslint-disable-next-line
  }, [amount]);
  useEffect(() => {
    if (!people || !total) return;
    setTotalTip(tip / people);
    setTotal((amount + tip) / people);
    // eslint-disable-next-line
  }, [tip]);
  const onPeopleChangeHandler = (value) => {
    setPeople(value);
  };
  const onAmountChangeHandler = (value) => {
    setAmount(value);
    setTotal(value + tip);
  };
  const onTipChangedHandler = (value) => {
    setTip(value);
  };
  const onResetHandler = () => {
    setAmount(0);
    setPeople(1);
    setTip(0);
    numRef.current = 0;
  };
  return (
    <div className="content">
      <div className="control-container py-2">
        <div className="input-container">
          <div className="m-bottom-1">
            <span>Bill</span>
            <BillInput value={amount} onChangeHandler={onAmountChangeHandler} />
          </div>
          <span>Select Tip %</span>
          <div className="tip-container">
            <TipInput amount={amount} setTip={onTipChangedHandler} tip={tip} />
          </div>
          <div className="m-top-1">
            <span>Number of People</span>
            <NumberOfPeopleInput
              value={people}
              onChangeHandler={onPeopleChangeHandler}
            />
          </div>
        </div>
        <div className="result-container">
          <div>
            <TipAmount value={totalTip} />
            <TotalAmount value={total} />
          </div>
          <Reset onReset={onResetHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
