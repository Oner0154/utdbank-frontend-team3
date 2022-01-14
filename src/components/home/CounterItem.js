import React from "react"

const CounterItem = ({ value, title, sign }) => {
  return (
    <>
      <h3>
        <span class="counter">{value}</span>
        <span class={sign == "+" ? `counter-text-lg` : `counter-text-sm`}>
          {sign}
        </span>
      </h3>
      <p>{title}</p>
    </>
  )
}

export default CounterItem
