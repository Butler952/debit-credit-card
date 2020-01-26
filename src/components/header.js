import React from 'react'
import Link from 'gatsby-link'
import './Header.css'


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
          <Link className="d-flex align-items-center" to="/"><div className="LogoRound"></div><h2>notCredit</h2></Link>
          <Link className="btn btn-SecondaryGhost" to="/page-2/">Sign Up</Link>
        </div>
      </div>
    )
  }
}

export default Header



