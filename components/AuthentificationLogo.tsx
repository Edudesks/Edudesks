import React from "react";
import Image from "next/image";
import '../app/globals.css';


const AuthentificationLogo = () => {
  return (
      <div className="w-[11.5625rem] lg:w-[17.25rem]">
        <Image
          src={"/logos/loginLogo.svg"}
          alt="text-Logo"
          width={276}
          height={56}
        />
      </div>
  );
};

export default AuthentificationLogo;
