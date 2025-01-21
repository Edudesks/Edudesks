import React, { useState } from "react";
import { TfiPencil } from "react-icons/tfi";
import Image from "next/image";

export default function EmployeeProfileContactDetailsComponent() {
  const [isEditingPersonalDetails, setIsEditingPersonalDetails] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    PhoneNumber:"08187643222",
    ResidentialAddress: "5, Joseph street, Yaba, Akoka, Lagos state",
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
        <h2>Contact details</h2>
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
              <label>Phone number:</label>
              <input
                type="text"
                name="PhoneNumber"
                value={personalDetails.PhoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="EmployeeProfileDetails2">
              <label>Residential address:</label>
              <input
                type="text"
                name="ResidentialAddress"
                value={personalDetails.ResidentialAddress}
                onChange={handleChange}
              />
            </div>
            <button className="employeeProfileSave" onClick={handleSaveClick}>Save</button>
            <button className="employeeProfileCancel" onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">Phone number:</p>
              <p>{personalDetails.PhoneNumber}</p>
            </div>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">Residential address:</p>
              <p>{personalDetails.ResidentialAddress}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
