import React from "react"
import SectionTitle from "../common/SectionTitle"
import CounterItem from "./CounterItem"

const Counter = () => {
  return (
    <section className="counter-section pt-100 pb-70">
      <div className="container">
        <SectionTitle title="We always try to evaluate customers Values" />

        <div className="counter-content">
          <div className="counter-item">
            <CounterItem value="70" sign="+" title="Contributors" />
          </div>
          <div className="counter-item">
            <CounterItem value="40" sign="K" title="Feedback" />

            <div className="counter-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="counter-item">
            <CounterItem value="1000" sign="K" title="Downloaded" />
            <div className="counter-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="counter-item">
            <CounterItem value="590" sign="+" title="Workers" />
            <div className="counter-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter
