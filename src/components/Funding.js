import React from "react";
import VacancyAlert from "./VacancyAlert";
const Funding = () => {
  return (
    <div className="col s12 homeWrapper">
      <VacancyAlert />
      <h5 className="blue-text text-lighten-2">Funding</h5>
      <p className="grey-text text-darken-2">
        If you are in receipt of benefits when your child is 2yrs old, there is
        funding for up to 15 hours a week for 38 weeks of the year; you need to
        fill in the appropriate paper work when your child starts and provide
        the appropriate evidence asked by the local authority. We take funded
        children from the term after their 2nd birthday and funded 3/4 year
        olds.
      </p>
      <p>Under 3 years £11.50 per hour</p>
      <p>Over 3 years £10.50 per hour</p>
      <br />
      <p className="grey-text text-darken-2">
        Parents are billed at the beginning of each term usually 11 or 14 weeks.
        Cheques and bank transfers are made payable to All Saint's Pre-School
        H/W.
      </p>
    </div>
  );
};
export default Funding;
