import React from 'react'
import Heading from './Heading'


export default function Dualinfo({heading}) {
    return (


    <section className="my-4 py-4 bg-theme">
    <div className="container">
    <Heading title={heading}/>
        <div className="row">
        <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
            The team is collectively responsible for: assisting the programme or project
             manager to deliver programme or project objectives. carrying out the elements 
             (within their technical expertise) of the programme or project they are tasked with.
            </p>
        </div>
<div className="col-4">
<div className="card-body bg-dark">
  <img src="https://images.pexels.com/photos/2756845/pexels-photo-2756845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="image goes here"/>
  <div className="card-body">
    <h5 className="card-title text-white">Just click photos</h5>
    <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's
     content.</p>
    <a href="#" className="btn btn-warning btn-block">
        {heading}
    </a>
  </div>
</div>
</div>
        </div>
    </div>
        </section>
    )
}
