import React from "react";
import Navbar from "../ui/Navbar";

const PublicHeader = () => {
  const items = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "About", href: "/about-us" },
    { key: "3", label: "Contact", href: "/contact" },
  ];
  return (
    <div>
      {/* <Navbar items={items} /> */}
    </div>
  );
};

export default PublicHeader;
