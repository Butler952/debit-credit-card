import React from 'react'
import Link from 'gatsby-link'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link className="d-flex align-items-center" to="/"><div className="LogoRound"></div><h2>Bamboo</h2></Link><p className="badge badge-Secondary Caption ml-2 my-0" to="/page-2/">Alpha</p>
        </div>
      </div>
    )
  }
}

export default Header



