import React from "react";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image
            className="float-left"
            src="/images/logo.png"
            width={50}
            height={50}
            alt="emre-taskiran"
          />
          emretaskiran.com
        </span>
        <p className="text-slate-600">
          emretaskiran.com Copyright © 2024, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
