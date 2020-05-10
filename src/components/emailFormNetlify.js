import React from "react"

export default class EmailForm extends React.Component {

  render() {
    return (
      <form 
        name="sign-up-form" 
        method="POST" 
        data-netlify="true"
        className={this.props.className}>
        <div className="position-rel">
          <input 
            className="HeroInput"
            placeholder={this.props.placeholder} 
            type="text" 
            name="email"/>
          <button className="btn btn-Secondary btn-input" type="submit">{this.props.buttoncta}</button>
        </div>
      </form>
    )
  }
}