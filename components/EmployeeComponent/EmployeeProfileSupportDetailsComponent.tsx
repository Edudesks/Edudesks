import React, { useState } from "react";
import Image from "next/image";
import { EmployeeCardProps } from "@/types/employee";
// Define the PersonalDetails type
interface PersonalDetails {
  CVpdf: string;
  UniversityTranscriptPdf: string;
}

export default function EmployeeProfileSupportDetailsComponent() {
  const [isEditingPersonalDetails, setIsEditingPersonalDetails] = useState<boolean>(false);

  // Use the PersonalDetails type for the state
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    CVpdf: "/documents/CV.pdf",
    UniversityTranscriptPdf: "/documents/UniversityTranscript.pdf",
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

    // Type-safe update to the state
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="employeeProfileContainer">
      <header className="employeeProfileHeader">
        <h2>Supporting Documents</h2>
        <div className="employeeProfilePen">
          <Image
            onClick={handleEditClick}
            src={"/icons/edit_01.svg"}
            alt="Edit icon"
            width={20}
            height={20}
            loading="lazy"
            quality={75}
          />
        </div>
      </header>

      <div className="EmployeeProfileDetails">
        {isEditingPersonalDetails ? (
          <>
            <div className="EmployeeProfileDetails2">
              <label>CV.pdf:</label>
              <input
                type="text"
                name="CVpdf" // Use CVpdf here, matching the state key
                value={personalDetails.CVpdf}
                onChange={handleChange}
              />
            </div>
            <div className="EmployeeProfileDetails2">
              <label>University transcript.pdf:</label>
              <input
                type="text"
                name="UniversityTranscriptPdf" // Use UniversityTranscriptPdf here
                value={personalDetails.UniversityTranscriptPdf}
                onChange={handleChange}
              />
            </div>
            <button className="employeeProfileSave" onClick={handleSaveClick}>Save</button>
            <button className="employeeProfileCancel" onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">CV.pdf:</p>
              <a href={personalDetails.CVpdf} target="_blank" rel="noopener noreferrer">
            View Document
          </a>
            </div>
            <div className="EmployeeProfileDetails2">
              <p className="labelPart">University transcript.pdf:</p>
              <a
            href={personalDetails.UniversityTranscriptPdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Document
          </a>
            </div>
          </>
        )}
      </div>

    </div>
  );
}
