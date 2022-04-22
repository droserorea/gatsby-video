import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Navbar/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/articles/">Go to Articles</Link> <br />
      <Link to="/images/">Go to List Images</Link> <br />
      <Link to="/gallery">Go to Gallery Default</Link> <br />
      <Link to="/about/">About</Link> <br />

    </p>
  </Layout>
)

export default IndexPage
