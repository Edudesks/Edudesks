import React from "react";
import Image from "next/image";
import '../app/globals.css';
import Link from "next/link";


const AuthentificationLogo = () => {
  return (
      <Link href={'/'} className="w-[11.5625rem] lg:w-[17.25rem] inline-block">
        <Image
          src={"/logos/loginLogo.svg"}
          alt="text-Logo"
          width={276}
          height={56}
        />
      </Link>
  );
};

export default AuthentificationLogo;
