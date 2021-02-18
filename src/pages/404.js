import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import PageNotFoundImage from '../assets/notfound.svg';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        
        <PageNotFoundImage style={{ maxHeight: 300, maxWidth: 300 }} />

        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

        <Link to="/">
          <Button marginTop="35px">Home 👈 😬</Button>
        </Link>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
