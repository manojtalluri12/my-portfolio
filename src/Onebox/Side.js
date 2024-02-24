import React, { useState } from "react";

const Side = () => {
  const array = ["FIRST Rea", "SECOND Rea", "THIRD RE"];
  const [step, setsteoh] = useState(0);
  const handlePrev = () => {
    if (step > 0) {
      setsteoh(step - 1);
    } else {
      setsteoh(0);
    }
  };
  const handleNext = () => {
    if (step < 2) {
      setsteoh(step + 1);
    } else {
      setsteoh(2);
    }
  };
  return (
    <div className="post">
      <div className="PosLife">
        <div className="PosLif">
          <p className={step >= 0 ? "active" : ""}>1</p>
          <p className={step >= 1 ? "active" : ""}>2</p>
          <p className={step >= 2 ? "active" : ""}>3</p>
        </div>
        <div className="PosLi">
          <p>{array[step]}</p>
        </div>
        <div className="PosL">
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Side;
