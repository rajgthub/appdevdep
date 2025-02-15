import React, { Fragment } from "react";
import VacancyAlert from "./VacancyAlert";
import Child1 from "../images/frontcircle/forest_school.jpg";
import Child2 from "../images/frontcircle/outdoor_access.jpg";
import Child3 from "../images/frontcircle/pond_area.jpg";
import Child4 from "../images/frontcircle/woodland _nature_reserve.jpg";
import "../App.css";
const Main = () => {
  return (
    <Fragment>
      {/* <div className="container s12"> */}
      <div id="imagesWrapper" className="s12 flex-container center">
        <div className="content">
          <img
            src={Child1}
            alt="child image1"
            className="circle image-text z-depth-5"
          />
          <div className="text-title">Forest School</div>
        </div>
        <div className="content">
          <img
            src={Child2}
            alt="child image1"
            className="circle image-text z-depth-5"
          />
          <div className="text-title">Outdoor Access</div>
        </div>

        <div className="content">
          <img
            src={Child3}
            alt="child image1"
            className="circle image-text z-depth-5"
          />
          <div className="text-title">Pond Area</div>
        </div>
        <div className="content">
          <img
            src={Child4}
            alt="child image1"
            className="circle image-text z-depth-5"
          />
          <div className="text-title">Woodland Nature Reserve</div>
        </div>
        {/* <img src={Child2} alt="child image2" className="circle z-depth-5" />
        <img src={Child3} alt="child image3" className="circle z-depth-5" /> */}
      </div>
      {/* </div>/ */}
      <div className="row">
        <div className="col s12 homeWrapper">
          <VacancyAlert />
          <h5 className="blue-text text-lighten-2">
            Welcome to All Saints Pre-School Online
          </h5>
          <p className="grey-text text-darken-2">
            We welcome all families from different faiths and beliefs, and
            children with different needs. We promote inclusive practice to
            welcome everyone and make positive impacts in this society. We
            welcome parents/carers to stay and settle their children to meet
            their wellbeing. We provide curriculum based on ‘Learning through
            play’ to develop children’s learning and development. We take an
            average of 16/18 children per session.
          </p>
          <p className="grey-text text-darken-2">
            We are a voluntary Church of England pre-school based in an
            accessible for all, single story Church hall, Blackwell hall, in a
            residential area. The Blackwell Hall is a purpose built; modern
            building designed to serve the needs of our local community. It is
            used for both church, community and private events. There are
            disabled parking spaces in the car park at the rear of the hall, a
            ramp at the entrance and a disabled toilet.
          </p>
          <p className="grey-text text-darken-2">
            We have a pre-school room, use of a large hall, a kitchen, our own
            toilets and use of the garden area. We have access to forest school
            which provides curriculum in outdoors by using the nature. We also
            have access to a great nature reserve which includes a pond for our
            children to learn from nature.
          </p>
          <p className="grey-text text-darken-2">
            We are open for 38 weeks of the year and are in receipt of 2/3/4yr
            old funding. We take funded children from the term after their 2nd
            birthday and funded 3/4 year olds. We also take non-funded children.
          </p>
          <h5 className="blue-text text-lighten-2">
           Fees
          </h5>
          <p className="grey-text text-darken-2">
          The preschool offers 30 hours and 15 hours funded places under the universal and working families eligibility criteria. We also offer flexible childcare according to families needs.  
          </p>
          <p className="grey-text text-darken-2">
          Under 3 years old £11.50 per hour, and over 3 years old £10.50 per hour.
          </p>
          <p className="grey-text text-darken-2">
          Parents will be billed monthly or termly.
          </p>
          <h5 className="blue-text text-lighten-2">Opening hours: </h5>
          <p className="grey-text text-darken-2">Monday 9:30 am - 4:00 pm.</p>
          <p className="grey-text text-darken-2">Tuesday 9:30 am - 4:00 pm.</p>
          <p className="grey-text text-darken-2">Wednesday 9:30 am - 4:00 pm.</p>
          <p className="grey-text text-darken-2">Thursday 9:30 am - 4:00 pm.</p>
          <p className="grey-text text-darken-2">Friday 9:30 am - 4:00 pm.</p>
          <br />
          <i className="grey-text grey-bold text-darken-2">
          we provide extended (lunch hour) and 30 hours childcare based on parents interests.
          </i>
          <br />
          <br />
          <p className="grey-text text-darken-2">
            There are four staff with appropriate qualifications in childcare
            and education. Three staff present at all time to safeguard
            children. As a voluntary setting, we are legally required to have a
            management committee who are our parents.
          </p>
          <p className="grey-text text-darken-2">
            We encourage parents to stay (Parent rota) twice per term to support
            their children and the preschool (at their convenience). We believe
            in supporting community engagement as we provide work placements for
            students from secondary schools and local colleges.
          </p>
          <p className="grey-text text-darken-2">
            We welcome families/parents/carers to visit our preschool to see how
            we are enabling the environment for all the children to thrive in
            their learning and development, and for you to get the feel of the
            place.
          </p>{" "}
          <p className="grey-text text-darken-2">
            Please feel free to browse our website and if you have a question
            please contact us.
            <br />
            <br />
            Kind regards,
            <br />
            Radhika Kovendrakumar - Preschool Manager
            <br />
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
