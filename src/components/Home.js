import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import Child1 from "../images/frontcircle/walking_1.jpg"
import Child2 from "../images/frontcircle/magnify.jpg"
import Child3 from "../images/frontcircle/graduation.jpeg"
import "../App.css"
const Main = () => {
  const downloadPolicy = () => {
    const link = document.createElement('a');
    link.href = `resource/policy.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <Fragment>
      {/* <div className="container s12"> */}
      <div id='imagesWrapper' className='s12 center'>
        <img src={Child1} alt='child image1' className='circle z-depth-5' />
        <img src={Child2} alt='child image2' className='circle z-depth-5' />
        <img src={Child3} alt='child image3' className='circle z-depth-5' />
      </div>
      {/* </div>/ */}
      <div className='row'>
        <div className='col s12 homeWrapper'>
          <div className='alert_message'>
            <h6 className='top_message'>
              We are accepting vacancies for January 2020 intake.{" "}
              <Link to='Contactus'> Contact us </Link>today to secure your
              place!
            </h6>
          </div>
          <h5 className='blue-text text-lighten-2'>
            Welcome to All Saints Pre-School Online
          </h5>
          <p className='grey-text text-darken-2'>
            We welcome all families from different faiths and beliefs, and
            children with different needs. We promote inclusive practice to
            welcome everyone and make positive impacts in this society. We
            welcome parents/carers to stay and settle their children to meet
            their wellbeing. We provide curriculum based on ‘Learning through
            play’ to develop children’s learning and development. We take an
            average of 16/18 children per session.
          </p>
          <p className='grey-text text-darken-2'>
            We are a voluntary Church of England pre-school based in an
            accessible for all, single story Church hall, Blackwell hall, in a
            residential area. The Blackwell Hall is a purpose built; modern
            building designed to serve the needs of our local community. It is
            used for both church, community and private events. There are
            disabled parking spaces in the car park at the rear of the hall, a
            ramp at the entrance and a disabled toilet.
          </p>
          <p className='grey-text text-darken-2'>
            We have a pre-school room, use of a large hall, a kitchen, our own
            toilets and use of the garden area. We have access to forest school
            which provides curriculum in outdoors by using the nature. We also
            have access to a great nature reserve which includes a pond for our
            children to learn from nature.
          </p>
          <p className='grey-text text-darken-2'>
            We are open for 38 weeks of the year and are in receipt of 2/3/4yr
            old funding. We take funded children from the term after their 2nd
            birthday and funded 3/4 year olds. We also take non-funded children.
            We charge £20 per session. Parent will be billed monthly or termly. 
          </p>
          <h5 className='blue-text text-lighten-2'>Policies and procedures: </h5>
          <p className='grey-text text-darken-2'>Safeguarding is paramount and it is our duty to keep our children safe. 
          Safeguarding is the action that is taken to promote the welfare of children and protect them from harm.</p>
          <p className='grey-text text-darken-2'>Safeguarding means:</p>
          <ul className=' list grey-text text-darken-2'>
        <li className='list'>
          <i className=' tiny material-icons'>child_care</i>protecting children from abuse and maltreatment.
        </li>
        <li className='list'>
          <i className=' tiny material-icons'>child_care</i>preventing harm to children’s health or development.
        </li>
        <li className='list'>
          <i className=' tiny material-icons'>child_care</i>Pensuring children grow up with the provision of safe and effective care.
        </li>
        <li className='list'>
          <i className=' tiny material-icons' >child_care</i> taking action to enable all children and young people to have the best outcomes.
         .
        </li>
      </ul>
      <br />    
          <p className='grey-text text-darken-2'>Child protection is part of the safeguarding process. It focuses on protecting individual children identified as suffering or likely to suffer significant harm. This includes child protection procedures which detail how to respond to concerns about a child (NSPCC 2021)</p>
          <a class="waves-effect waves-light btn-small" onClick={downloadPolicy} style={{backgroundColor:"#64B5F6", marginTop: "5px"}}><i class="material-icons left" style={{color:"tiny", backgroundColor:"#64B5F6"}}>cloud</i>Download policy</a>
          <br/>
          <span className="termDates-header" style={{fontSize: "15px"}}>*Other policies and procedures will be accessible on hard copies based on requests*</span>
          <h5 className='blue-text text-lighten-2'>Opening hours: </h5>
          <p className='grey-text text-darken-2'>Monday 9.30-12.30.</p>
          <p className='grey-text text-darken-2'>Tuesday 9.30-12.30.</p>
          <p className='grey-text text-darken-2'>Wednesday 9.30-12.30.</p>
          <p className='grey-text text-darken-2'>Thursday 9.30-12.30.</p>
          <p className='grey-text text-darken-2'>Friday 9.30-12.30.</p>
          <br />
          <i className='grey-text grey-bold text-darken-2'>
            Lunch hours would be provided based on parents interest
          </i>
          <p className='grey-text text-darken-2'>
            There are four staff with appropriate qualifications in childcare
            and education. Three staff present at all time to safeguard
            children. As a voluntary setting, we are legally required to have a
            management committee who are our parents.
          </p>
          <p className='grey-text text-darken-2'>
            We encourage parents to stay (Parent rota) twice per term to support
            their children and the preschool (at their convenience). We believe
            in supporting community engagement as we provide work placements for
            students from secondary schools and local colleges.
          </p>
          <p className='grey-text text-darken-2'>
            We welcome families/parents/carers to visit our preschool to see how
            we are enabling the environment for all the children to thrive in
            their learning and development, and for you to get the feel of the
            place.
          </p>{" "}
          <p className='grey-text text-darken-2'>
            Please feel free to browse our website and if you have a question
            please contact us.
            <br />
            <br />
            Kind regards,
            <br />
            Deepa Sharma - Preschool Manager
            <br />
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default Main
