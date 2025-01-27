import Image from "next/image";
import React, { useState, useRef } from "react";
import { inter, openSans } from "@/app/fonts/fonts";
import { EmployeeCardProps } from "@/types/employee";
export default function EmployeeProfileImg({ title, value }:EmployeeCardProps) {
  const [profileImage, setProfileImage] = useState(
    "/images/ProfileRectangle.svg"
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEditClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically trigger the file input
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <>
      <div className="w-full lg:w-[283px] p-2 flex flex-col gap-2">
        <h2
          className={`${openSans.className} text-[20px] text-[black] font-[600]`}
        >
          Profile Picture
        </h2>
        <div className="w-full">
          <div className="w-[100%] md:w-[180px] lg:w-[282px] h-[271px]">
            <Image
              className="w-[96%] h-full"
              src={profileImage}
              alt="Profile"
              width={1000}
              height={1000}
              loading="lazy"
              quality={75}
            />
          </div>

          <p
            onClick={handleEditClick}
            className="hover:cursor-pointer underline text-[16px] text-[var(--primary)]"
          >
            Change profile picture
          </p>

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      </div>
    </>
  );
}
