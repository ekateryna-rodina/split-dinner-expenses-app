import React from "react";
import BillInput from "./components/BillInput";
import NumberOfPeopleInput from "./components/NumberOfPeopleInput";
import Reset from "./components/Reset";
import TipAmount from "./components/TipAmount";
import TotalAmount from "./components/TotalAmount";
function App() {
  const tips = ["5%", "10%", "15%", "25%", "50%", "Custom"];
  return (
    <div className="content">
      <div className="control-container py-2">
        <div className="input-container">
          <div className="m-bottom-1">
            <span>Bill</span>
            <BillInput />
          </div>
          <span>Select Tip %</span>
          <div className="tip-container">
            {tips.map((t, i) => {
              if (t === "Custom") {
                return (
                  <input key={t} className="tip-box input dollar-icon"></input>
                );
              } else {
                return (
                  <div key={t} className="tip-box button">
                    {t}
                  </div>
                );
              }
            })}
          </div>
          <div className="m-top-1">
            <span>Number of People</span>
            <NumberOfPeopleInput />
          </div>
        </div>
        <div className="result-container">
          <div>
            <TipAmount />
            <TotalAmount />
          </div>
          <Reset />
        </div>
      </div>
    </div>
  );
}

export default App;
