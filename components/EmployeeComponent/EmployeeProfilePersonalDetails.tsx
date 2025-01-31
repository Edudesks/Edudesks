import React, { useState } from "react";
import { TfiPencil } from "react-icons/tfi";
import Image from "next/image";
import { EmployeeCardProps } from "@/types/employee";
export default function EmployeeProfilePersonalDetailsComponent({ title, value }:EmployeeCardProps) {
  const [isEditingPersonalDetails, setIsEditingPersonalDetails] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "Joseph",
    middleName: "Olawole",
    lastName: "Ernest",
    gender: "Male",
    dob: "7th June 2000",
    email: "josephernest109@gmail.com",
    nationalId: "10101010101001",
    bankAccount: "10101010101001 (Gt Bank)",
  });

  const handleEditClick = () => {
    setIsEditingPersonalDetails(true);
  };

  const handleSaveClick = () => {
    setIsEditingPersonalDetails(false);
  };

  const handleCancelClick = () => {
    setIsEditingPersonalDetails(false);
    // Optionally reset state to revert unsaved changes if needed.
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
        <h2>Personal Details</h2>
        <div className="employeeProfilePen">
        <Image onClick={handleEditClick}
                src={"/icons/edit_01.svg"}
                alt="edit_01 icon"
                width={100}
                height={100}
                loading="lazy"
                quality={75}
              />
        </div>
      </header>

      <div className="EmployeeProfileDetails">
        {isEditingPersonalDetails ? (
          <>
            <div className="EmployeeProfileDetails2">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={personalDetails.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="EmployeeProfileDetails2">
              <label>Middle Name:</label>
              <input
                type="text"
                name="middleName"
                value={personalDetails.middleName}
                onChange={handleChange}
              />
            </div>
            <div className="EmployeeProfileDetails2">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={personalDetails.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="EmployeeProfileDetails2">
              <label>Gender:</label>
              <input
                type="text"
                name="gender"
                value={personalDetails.gender}
                onChange={handleChange}
              />
            </div>
            <div className="EmployeeProfileDetails2">
              <label>Date of Birth:</label>
              <input
                type="text"
                name="dob"
                value={personalDetails.dob}
                onChange={handleChange}
              />
            </div>
            <div className="EmployeeProfileDetails2">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={personalDetails.email}
                onChange={handleChange}
              />
            </div>
            <div className="EmployeeProfileDetails2">
              <label>National ID Number:</label>
              <input
                type="text"
                name="nationalId"
                value={personalDetails.nationalId}
                onChange={handleChange}
              />
            </div>
            <div className="EmployeeProfileDetails2">
              <label>Bank Account Details:</label>
              <input
                type="text"
                name="bankAccount"
                value={personalDetails.bankAccount}
                onChange={handleChange}
              />
            </div>
            <button className="employeeProfileSave" onClick={handleSaveClick}>Save</button>
            <button className="employeeProfileCancel" onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">First Name:</p>
              <p>{personalDetails.firstName}</p>
            </div>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">Middle Name:</p>
              <p>{personalDetails.middleName}</p>
            </div>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">Last Name:</p>
              <p>{personalDetails.lastName}</p>
            </div>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">Gender:</p>
              <p>{personalDetails.gender}</p>
            </div>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">Date of Birth:</p>
              <p>{personalDetails.dob}</p>
            </div>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">Email:</p>
              <p>{personalDetails.email}</p>
            </div>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">National ID Number:</p>
              <p>{personalDetails.nationalId}</p>
            </div>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">Bank Account Details:</p>
              <p>{personalDetails.bankAccount}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
