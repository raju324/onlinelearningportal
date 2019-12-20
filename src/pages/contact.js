import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import Info from "../components/Reusable/Info"
import Background from"../components/Background"

const ContactPage = ({data}) => 
(
  <Layout>
     <SEO title="Home"/>
   <Background img={data.img.childImageSharp.fluid} title="Contact Us" styleClass="about-contact"></Background>
 
   <Info heading="How can we help ?"/>
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: {eq: "contact.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ContactPage
