import React from 'react'
import { Link } from "gatsby"

 const Feature = props => (
  <div className={"Feature " + (props.mainFeature ? 'Card' : 'Standard')}>
      <img src={props.image} />
      <div>
        <h2>{props.title}</h2>
        <ul>
          <li><p>{props.listItem1}</p></li>
          <li><p>{props.listItem2}</p></li>
          <li><p>{props.listItem3}</p></li>
        </ul>
      </div>
  </div>
)

export default Feature