import React from "react";
import { Link } from "react-router-dom";
export default function VacancyAlert() {
  return (
    <div className="alert_message">
      <h6 className="top_message">
        We are accepting vacancies for current intake.{" "}
        <Link to="Contactus"> Contact us </Link>today to secure your place!
      </h6>
      <h5 className="bottom_message">
        <p className="bottom_top_paragraph">
          We are spreading our wings to open up 30 hours childcare from Jan 2022.
        </p>
        <p>
          Open day is on 3rd of December from 10 am for families and carers to visit our exciting preschool to see us in action!!
        </p>
      </h5>
    </div>
  );
}