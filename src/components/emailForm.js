import React from "react"

export default class EmailForm extends React.Component {
  state = {
    firstName: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.name}!`)
  }

  render() {
    return (
      <form 
        onSubmit={this.handleSubmit}
        className={this.props.className}>
        <div className="position-rel">
          <input 
            className="HeroInput"
            placeholder={this.props.placeholder} 
            type="text" 
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}/>
          <button className="btn btn-Secondary btn-input" type="submit">{this.props.buttoncta}</button>
        </div>
      </form>
    )
  }
}