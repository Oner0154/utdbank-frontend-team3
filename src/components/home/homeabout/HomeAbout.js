import React from "react"
import HomeAboutItem from "./HomeAboutItem"

const HomeAbout = () => {
  return (
    <section className="home-about-section bg-off-white pt-100 pb-70">
      <div className="container">
        <div className="home-about-content">
          <HomeAboutItem
            title="A fully integrated suite for Large enterprise"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod cste et dolore magnam aliquam quaerat
                    voluptatem."
            title1="International Payments"
            title2="Request Features"
            title3="Premium Support"
            title4="Direct Debit"
            title5="Automated Accounting"
            title6="Web Design"
            image="enterprise.png"
            type="2"
          />

          <div className="section-mtb-40">
            <HomeAboutItem
              title="Small to medium-sized businesses"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod cste et dolore magnam aliquam quaerat
                    voluptatem."
              title1="Deposit Checks Instantly"
              title2="A Powerful Open API"
              title3="Affiliates And Partnerships"
              title4="Coverage Around The World"
              title5="Business Without Borders"
              title6="Web Design"
              image="business.png"
              type="1"
            />
          </div>

          <div className="section-mtb-40">
            <HomeAboutItem
              title="Entrepreneurs, and sole traders & Freelancers"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod cste et dolore magnam aliquam quaerat
                    voluptatem."
              title1="International Payments"
              title2="Request Features"
              title3="Premium Support"
              title4="Direct Debit"
              title5="Automated Accounting"
              title6="Web Design"
              image="entrepreneur.png"
              type="2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
