import React from "react"

const CounterItem = ({ value, title, sign }) => {
  return (
    <>
      <h3>
        <span className="counter">{value}</span>
        <span className={sign == "+" ? `counter-text-lg` : `counter-text-sm`}>
          {sign}
        </span>
      </h3>
      <p>{title}</p>
    </>
  )
}

export default CounterItem
