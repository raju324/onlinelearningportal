import React from 'react'
import { Link } from "gatsby"
import Heading from "./Heading"
export default function Info({heading}) {
    return (
       <section className="bg-theme my-5 py-5">
           <div className="container">
               <Heading title={heading}/>
                   
               
               <div className="row">
                   <div className="col-10 col-sm-8 mx-auto text-center">
                  <p className="lead text-white mb-5">
         An About Us page can be one of the most important pages on
         your website but it is one of the most overlooked elements on your website normally.
     About Us pages can highlight why you created your business, your commitment to sustainability,
    or you can tell the story of how your business came to be. As an important part of your website your 
     About Us page can set you apart from your competitors in a way that can build your brand in a positive way.

                        </p>
                       <Link to="/About/">
                           <button className="btn btn-warning btn-lg">
                               {heading}
                           </button>
                       </Link>
                   </div>
                   
               </div>
           </div>

       </section>
    )
}
