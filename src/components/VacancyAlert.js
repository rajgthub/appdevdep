import React from "react";
import { Link } from "react-router-dom";
export default function VacancyAlert() {
  return (
    <div className="alert_message">
      <h6 className="top_message">
        We are accepting vacancies for 2022 intake.{" "}
        <Link to="Contactus"> Contact us </Link>today to secure your place!
      </h6>
    </div>
  );
}