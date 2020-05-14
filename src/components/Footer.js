import React from 'react'
import { Link } from "gatsby"

class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <footer>
        <div className="Container">
          <h3><Link to="/terms-and-conditions/">Terms and Conditions</Link></h3>
          <h3><Link to="/privacy-policy/">Privacy Policy</Link></h3>
          <h3><Link to="/cookie-policy/">Cookie Policy</Link></h3>
        </div>
        <br></br>
        <div className="Container footer">
          © Copyright GetBamboo {new Date().getFullYear()} <p className="badge badge-Secondary Caption ml-2 my-0" to="/page-2/">Alpha</p>
        </div>
      </footer>
    )
  }
}

export default Footer



