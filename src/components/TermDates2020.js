import React from "react"
const TermDates2020 = () => (
  <>
    <h5 className="blue-text text-lighten-2">
      Term dates for next academic year (Sept 2020 - July 2021)
    </h5>
    <span className="termDates-header">Autumn Term</span>
    <br />
    <i>7th Sept setting up (No Children in)</i>
    <ul className=" list grey-text text-darken-2">
      <li>
        <i className=" tiny material-icons">child_care</i>7th Sept – 
        23rd Oct{" "}
      </li>
      <li>
        <i className=" tiny material-icons">child_care</i>26th - 30th Oct 1 week half term closed
      </li>
      <li>
        <i className=" tiny material-icons">child_care</i>2nd Nov –
        11th Dec
      </li>
      <li>
        <i className=" tiny material-icons">child_care</i>14th Dec – 1st Jan  and 3 weeks Christmas holiday
      </li>
    </ul>
    <span className="termDates-header">Spring Term</span>
    <br />
    <i>Monday 4th Jan setting up (No Children in)</i>
    <ul className=" list grey-text text-darken-2">
      <li>
        <i className=" tiny material-icons">child_care</i>4th Jan – 
        12th Feb
      </li>
      <li>
        <i className=" tiny material-icons">child_care</i>15th Feb – 19th Feb 1 week half term closed
      </li>
      <li>
        <i className=" tiny material-icons">child_care</i>22nd Feb – 31st
        March
      </li>
      <li>
        <i className=" tiny material-icons">child_care</i>1st April – 16th Apr 2 weeks Easter holiday closed
      </li>
    </ul>
    <span className="termDates-header">Summer Term</span>
    <br />
    <i>19th April setting up (No Children in)</i>
    <ul className=" list grey-text text-darken-2">
      <li>
        <i className=" tiny material-icons">child_care</i>19th April – 28th May
      </li>
      <li>
        <i className=" tiny material-icons">child_care</i>31st May – 4th
       June 1 week half term closed
      </li>
      <li>
        <i className=" tiny material-icons">child_care</i>7th June – 23rd July
      </li>
      {/* <li>
        <i className=" tiny material-icons">child_care</i>Tues 4 Jun – Fri 19
        Jul
      </li> */}
    </ul>
    <br />
    <p className="grey-text text-darken-2">
      <span className="termDates-header">*</span>
      All children and parents are invited to the Friday mornings Party Days.
      All younger siblings and parents only. Sorry no other relations invited.
    </p>
    <br />
    <ul className=" list grey-text text-darken-2">
      <li>
        <i className=" tiny material-icons">child_care</i>Christmas Party
        <span> </span>11th December 2020
      </li>
      <li>
        <i className=" tiny material-icons">child_care</i>Easter Party
        <span> </span>31st March
      </li>
      <li>
        <i className=" tiny material-icons">child_care</i>Bank Holiday
        <span> </span>3rd May
      </li>
      <li>
        <i className=" tiny material-icons">child_care</i>Polling day
        <span> </span>6th May
      </li>
      <li>
        <i className=" tiny material-icons">child_care</i>Leavers Party
        <span> </span>23rd July
      </li>
    </ul>
    <p className="grey-text text-darken-2">
      <span className="termDates-header">**</span>
      Only parents, grandparents and siblings are welcome to attend preschool parties
      <span className="termDates-header">**</span>
    </p>
  </>
)
export { TermDates2020 as default }
