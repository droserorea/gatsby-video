import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () =>(
    <Layout>
        <SEO title="About"/>
        <h1>About Page</h1>
        <Link to="/">Back Home</Link>
    </Layout>
)

export default About
