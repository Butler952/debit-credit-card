import React from "react"
import { Link } from "gatsby"
import './index.scss'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Feature from "../components/feature"
import EmailForm from "../components/emailFormNetlify"

const IndexPage = () => (
  <Layout>
    <SEO title="Build your credit score with a debit card" description="Improve your credit score as if you were using a credit card, but without the debt." />
    <div className="HeroSection">
      <div className="Container">
        <div className="Hero">
          <div id="HeroGroup" className="HeroGroup">
            <h1>Build your credit score with a <span className="HeroTitleUnderline"><span>debit card</span><div></div></span></h1>
            <p>Improve your credit score as if you were using a credit card, but without the debt.</p>
            <EmailForm
              analyticsName="Top Hero CTA"
              className="HeroForm"
              placeholder="Email address"
              buttoncta="Sign up"
            />
          </div>
          <div className="HeroImage">
            <img className="AnglePhoneImage" src={require('../images/Apple_pay_and_card_hero.png')} />
          </div>
        </div>
      </div>
    </div>
    <div className="FeatureSection">
      <div className="Container">
      <h1 className="text-center">The safest way to build credit</h1>
        <div className="FeatureGroup">
          <Feature 
              class="Feature"
              mainFeature={false}
              image={require('../images/debit_card.png')}
              title="Debit Card"
              listItem1="😫	 Doesn't help credit score"
              listItem2="🚨	 Poor security against fraud"
              listItem3="😅	 No debt" />
          <Feature 
              class="Feature"
              mainFeature={true}
              image={require('../images/Bamboo_card.png')}
              title="Bamboo"
              listItem1="🎉	 Supercharges credit score"
              listItem2="🛡	 Awesome fraud protection"
              listItem3="🙌	 No debt" />
          <Feature 
              class="Feature"
              mainFeature={false}
              image={require('../images/credit_card.png')}
              title="Credit Card"
              listItem1="👍	 Builds credit score"
              listItem2="🔒	 Good fraud protection"
              listItem3="😡	 Risk of accumulating debt" />
        </div>
      </div>
    </div>
    <div className="EndCTASection">
      <div className="Container">
        <div className="Hero">
          <div className="EndCTAImage">
            <img className="AnglePhoneImage" src={require('../images/Apple_pay_and_card_hero_flip.png')} />
          </div>
          <div id="#EndCTAGroup" className="EndCTAGroup">
            <h1>Build your credit score with a <span className="HeroTitleUnderline"><span>debit card</span><div></div></span></h1>
            <p>Improve your credit score as if you were using a credit card, but without the debt.</p>
            <EmailForm
              analyticsName="End Hero CTA"
              className="HeroForm"
              placeholder="Email address"
              buttoncta="Sign up"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
