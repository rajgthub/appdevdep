import React, { Fragment } from "react";
import VacancyAlert from "./VacancyAlert";
import "../App.css";
const Policy = () => {
  const downloadPolicy = () => {
    const link = document.createElement("a");
    link.href = `resource/Safeguarding children, young people and vulnerable adults policy January 2024.docx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const downloadPolicyZip = () => {
    const link = document.createElement("a");
    link.href = `resource/Safegurding procedures.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Fragment>
      <div className="row">
        <div className="col s12 homeWrapper">
          <VacancyAlert />
          <h5 className="blue-text text-lighten-2">Policies and procedures </h5>
          <p className="dark-title">
            Safeguarding is paramount and it is our duty to keep our children
            safe.
          </p>
          <p className="dark-title-1">
            Safeguarding is the action that is taken to promote the welfare of
            children and protect them from harm.
          </p>
          <p className="dark-title-1">Safeguarding means:</p>
          <ul className=" list grey-text text-darken-2">
            <li className="list">
              <i className=" tiny material-icons">child_care</i>protecting
              children from abuse and maltreatment.
            </li>
            <li className="list">
              <i className=" tiny material-icons">child_care</i>preventing harm
              to children’s health or development.
            </li>
            <li className="list">
              <i className=" tiny material-icons">child_care</i>ensuring
              children grow up with the provision of safe and effective care.
            </li>
            <li className="list">
              <i className=" tiny material-icons">child_care</i> taking action
              to enable all children and young people to have the best outcomes.
            </li>
          </ul>
          <br />
          <p className="dark-title-1">
            Child protection is part of the safeguarding process. It focuses on
            protecting individual children identified as suffering or likely to
            suffer significant harm. This includes child protection procedures
            which detail how to respond to concerns about a child (NSPCC 2021)
          </p>
          <p className="dark-title-1" style={{ marginBottom: "1px" }}>
            Safeguarding children, young people and vulnerable adults
          </p>
          <div class="downloadablePolicyLinks">
            <button
              class="waves-effect waves-light btn-small"
              onClick={downloadPolicy}
              style={{ backgroundColor: "#64B5F6", marginBottom: "15px" }}
            >
              <i class="material-icons left" style={{ color: "tiny" }}>
                cloud
              </i>
              Download Policy
            </button>
            <button
              class="waves-effect waves-light btn-small"
              onClick={downloadPolicyZip}
              style={{ backgroundColor: "#64B5F6", marginBottom: "15px" }}
            >
              <i class="material-icons left" style={{ color: "tiny" }}>
                cloud
              </i>
              Download Safeguarding Procedures
            </button>
          </div>
          <div>
            <span className="termDates-header" style={{ fontSize: "15px" }}>
              *Other policies and procedures will be accessible on hard copies
              based on requests*
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Policy;
