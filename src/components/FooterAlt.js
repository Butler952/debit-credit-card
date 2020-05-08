import React from 'react'

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
          <h3><a href="#">Legal Stuff</a></h3>
          <h3><a href="#">Terms and Conditions</a></h3>
          <h3><a href="#">Cookie Policy</a></h3>
          <h3><a href="#">Refer a Friend</a></h3>
          <h3><a href="#">Write a review</a></h3>
          <br></br>
          © Copyright GetBamboo {new Date().getFullYear()}
        </div>
      </footer>
    )
  }
}

export default Footer



