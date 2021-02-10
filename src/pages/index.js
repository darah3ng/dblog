import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import Me from '../assets/me.svg';

const bioDescStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
};

class IndexPage extends React.Component {
  render() {
    const siteTitle = ""

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
          Howdy{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>

        <div style={bioDescStyle}>
          <Me />

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10px' }}>
            <p>I'm Dara <span role="img" aria-label="arrrow emoji">🏹</span></p>
            <p>
              I am a frontend developer by the day, and enjoy doing research on the human mind by night. <span role="img" aria-label="brain emoji">🧠</span>
            </p>
          </div>

        </div>

        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
