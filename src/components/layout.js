/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
          <footer>
            <div className="Container">
              <h3><a href="#">Legal Stuff</a></h3>
              <h3><a href="#">Terms and Conditions</a></h3>
              <h3><a href="#">Cookie Policy</a></h3>
              <h3><a href="#">Refer a Friend</a></h3>
              <h3><a href="#">Write a review</a></h3>
              <br></br>
              © Copyright notCredit {new Date().getFullYear()}
            </div>
          </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
