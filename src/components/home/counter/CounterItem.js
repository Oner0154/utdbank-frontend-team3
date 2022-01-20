import React from "react";


const CounterItem = ({ counter, size, sign, title, loader }) => {
  return (
    <div className="counter-item">
      <h3>
        <span className="counter">{counter}</span>

        <span className={`counter-text-${size}`}>{sign}</span>
      </h3>
      <p>{title}</p>
      {loader && (
        <div className="counter-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </div>


  );
};

export default CounterItem;
