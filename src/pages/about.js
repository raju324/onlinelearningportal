import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import Info from "../components/Reusable/Info"
import Background from"../components/Background"
import Dualinfo from "../components/Reusable/Dualinfo"
const IndexPage = ({data}) => 
(
  <Layout>
     <SEO title="Home"/>
   <Background img={data.img.childImageSharp.fluid} title="DealMart" styleClass="about-heromain"></Background>
  <Dualinfo heading="A message from CEO"/>
   <Info heading="About Vision"/>
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: {eq: "about.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage
