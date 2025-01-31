import React, { useState } from "react";
import { TfiPencil } from "react-icons/tfi";
import Image from "next/image";
import { EmployeePositionProps } from "@/types/employee";
export default function EmployeeProfilePositionDetailsComponent({Department, Role}:EmployeePositionProps) {
  const [isEditingPersonalDetails, setIsEditingPersonalDetails] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    Department:Department,
    Role:Role ,
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
        <h2>Position details</h2>
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
              <label>Department:</label>
              <input
                type="text"
                name="Department"
                value={personalDetails.Department}
                onChange={handleChange}
              />
            </div>
            <div className="EmployeeProfileDetails2">
              <label>Role:</label>
              <input
                type="text"
                name="Role"
                value={personalDetails.Role}
                onChange={handleChange}
              />
            </div>
            <button className="employeeProfileSave" onClick={handleSaveClick}>Save</button>
            <button className="employeeProfileCancel" onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">Department:</p>
              <p>{personalDetails.Department}</p>
            </div>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">Role:</p>
              <p>{personalDetails.Role}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
