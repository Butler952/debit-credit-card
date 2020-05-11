import React from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function EmailForm() {
  
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <form
      name="sign-up-form"
      method="POST"
      action="/page-2/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={this.props.className}>
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <div className="position-rel">
        <input
          className="HeroInput"
          placeholder={this.props.placeholder}
          type="text"
          name="email"
          onChange={handleChange} />
        <button className="btn btn-Secondary btn-input" type="submit">{this.props.buttoncta}</button>
      </div>
    </form>
  )
}


___


import React, { Component } from 'react';
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
    console.log(`${this.state}`)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <form
      name="sign-up-form"
      method="POST"
      action="/page-2/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={this.handleSubmit}
      className={this.props.className}>
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={this.handleInputChange} />
          </label>
        </p>
        <div className="position-rel">
          <input
            className="HeroInput"
            placeholder={this.props.placeholder}
            type="text"
            name="email"
            value={this.state.name}
            onChange={this.handleInputChange}/>
          <button className="btn btn-Secondary btn-input" type="submit">{this.props.buttoncta}</button>
        </div>
      </form>
    )
  }
}

___


import React from 'react';
import { navigate } from 'gatsby-link'

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class EmailForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { email: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      const form = e.target
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { email } = this.state;
      return (
        <form 
          onSubmit={this.handleSubmit} 
          className={this.props.className}
          action="/page-2/"
          method="post" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <div className="position-rel">
            <input 
              className="HeroInput"
              placeholder={this.props.placeholder} 
              type="email" 
              name="email"
              value={email}
              onChange={this.handleChange}/>
            <button className="btn btn-Secondary btn-input" type="submit">{this.props.buttoncta}</button>
          </div>
        </form>
      );
    }
  }

  export default EmailForm