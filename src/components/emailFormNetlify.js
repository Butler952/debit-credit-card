import React from 'react';
import { navigate } from 'gatsby-link'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

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
      // Lets track that custom click
      trackCustomEvent({
        // string - required - The object that was interacted with (e.g.video)
        category: "Form",
        // string - required - Type of interaction (e.g. 'play')
        action: "Submit",
        // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
        label: this.props.analyticsName,
      })
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
          name="contact"
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