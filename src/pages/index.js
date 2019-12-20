import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import Info from "../components/Reusable/Info"
import Background from"../components/Background"
import Dualinfo from "../components/Reusable/Dualinfo"
import Coursecart from"../components/Cart/Coursecart"
const IndexPage = ({data}) => 
(
  <Layout>
     <SEO title="Home"/>
   <Background img={data.img.childImageSharp.fluid} title="LearnMart" styleClass="heromain"></Background>
   <Info heading="About Us"/>
   <Coursecart courses={data.courses}/>
   <Dualinfo heading="Our Team"/>
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: {eq: "heromain.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
 courses:allContentfulCourses{
    edges{
      node{
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width:200,height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
