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
        <div className="Container footer">
          © Copyright GetBamboo {new Date().getFullYear()} <p className="badge badge-Secondary Caption ml-2 my-0" to="/page-2/">Alpha</p>
        </div>
      </footer>
    )
  }
}

export default Footer



