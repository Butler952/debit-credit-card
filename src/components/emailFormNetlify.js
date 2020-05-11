import React from 'react';
import { navigate } from 'gatsby-link'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import Modal from 'react-modal';
import TheBambooTeam from '../icons/TheBambooTeam'

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class EmailForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { email: "", showModal: false };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ email: "", showModal: false });
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      e.preventDefault();
      if (this.state.email === '') {
        alert("Please enter a valid email address");
      } else {
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
        .catch(error => alert(error))
        .then(() => this.handleOpenModal());
      }
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { email } = this.state;
      return (
        <div>
          <Modal 
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
             className="Modal text-center"
             overlayClassName="Overlay"
          >
            <svg className="closeIcon" onClick={this.handleCloseModal} width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M7.70710678,6.29289322 L12,10.585 L16.2928932,6.29289322 C16.6834175,5.90236893 17.3165825,5.90236893 17.7071068,6.29289322 C18.0976311,6.68341751 18.0976311,7.31658249 17.7071068,7.70710678 L13.415,12 L17.7071068,16.2928932 C18.0976311,16.6834175 18.0976311,17.3165825 17.7071068,17.7071068 C17.3165825,18.0976311 16.6834175,18.0976311 16.2928932,17.7071068 L12,13.415 L7.70710678,17.7071068 C7.31658249,18.0976311 6.68341751,18.0976311 6.29289322,17.7071068 C5.90236893,17.3165825 5.90236893,16.6834175 6.29289322,16.2928932 L10.585,12 L6.29289322,7.70710678 C5.90236893,7.31658249 5.90236893,6.68341751 6.29289322,6.29289322 C6.68341751,5.90236893 7.31658249,5.90236893 7.70710678,6.29289322 Z" id="🎨-Close" fill="#C9CED6" fill-rule="evenodd"></path>
              </g>
            </svg>
            <div className="my-4">
            <svg width="80px" height="80px" viewBox="0 0 24 24" version="1.1">
              <g id="Icon/Tick" fill="none">
                <path d="M18.2928932,7.29289322 C18.6834175,6.90236893 19.3165825,6.90236893 19.7071068,7.29289322 C20.0976311,7.68341751 20.0976311,8.31658249 19.7071068,8.70710678 L10.7071068,17.7071068 C10.3165825,18.0976311 9.68341751,18.0976311 9.29289322,17.7071068 L5.29289322,13.7071068 C4.90236893,13.3165825 4.90236893,12.6834175 5.29289322,12.2928932 C5.68341751,11.9023689 6.31658249,11.9023689 6.70710678,12.2928932 L10,15.5857864 L18.2928932,7.29289322 Z" fill="#23E5AF" id="🎨-Icon-style"></path>
              </g>
            </svg>
              <h1>Thank you</h1>
              <p>We're still working on putting the finishing touches on the product but we're really excited that you're interested in Bamboo.</p>
              <p>You're in the queue for early access and we'll let you know when Bamboo is ready.</p>
              <p className="mb-4">Many thanks and speak to you soon,</p>
              <TheBambooTeam />
              <p className="mt-2">The Bamboo Team</p>
            </div>
          </Modal>
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
        </div>
      );
    }
  }

  export default EmailForm

  /*

  class ExampleApp extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div>
          <button onClick={this.handleOpenModal}>Trigger Modal</button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
          >
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
      );
    }
  }
  
  const props = {};
  
  ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))
  */