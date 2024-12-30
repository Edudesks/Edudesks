import React, { useState } from "react";
import { TfiPencil } from "react-icons/tfi";
import Image from "next/image";
export default function EmployeeProfileEducationDetailsComponent() {
  const [isEditingPersonalDetails, setIsEditingPersonalDetails] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    Education:"B.SC in English",
    Institution: "University of Lagos",
  });

  const handleEditClick = () => {
    setIsEditingPersonalDetails(true);
  };

  const handleSaveClick = () => {
    setIsEditingPersonalDetails(false);
  };

  const handleCancelClick = () => {
    setIsEditingPersonalDetails(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="employeeProfileContainer">
      <header className="employeeProfileHeader">
        <h2>Education details</h2>
        <div className="employeeProfilePen">
        <Image onClick={handleEditClick}
                src={"/icons/edit_01.svg"}
                alt="edit_01 icon"
                width={1000}
                height={1000}
                loading="lazy"
                quality={75}
              />
        </div>
      </header>

      <div className="EmployeeProfileDetails">
        {isEditingPersonalDetails ? (
          <>
            <div className="EmployeeProfileDetails2">
              <label>Level of education:</label>
              <input
                type="text"
                name="Level of Education"
                value={personalDetails.Education}
                onChange={handleChange}
              />
            </div>
            <div className="EmployeeProfileDetails2">
              <label>Institution:</label>
              <input
                type="text"
                name="Institution"
                value={personalDetails.Institution}
                onChange={handleChange}
              />
            </div>
            <button className="employeeProfileSave" onClick={handleSaveClick}>Save</button>
            <button className="employeeProfileCancel" onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">Level of education:</p>
              <p>{personalDetails.Education}</p>
            </div>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">Institution:</p>
              <p>{personalDetails.Institution}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
