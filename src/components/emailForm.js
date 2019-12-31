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
      <form onSubmit={this.handleSubmit}>
        <div className="position-rel">
          <input 
            placeholder="Input with Button" 
            type="text" 
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}/>
          <button class="btn btn-Primary btn-input" type="submit">Submit</button>
        </div>
      </form>
    )
  }
}