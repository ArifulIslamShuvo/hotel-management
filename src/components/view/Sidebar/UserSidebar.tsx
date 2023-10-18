import React from "react";

const UserSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "User Profile", href: "/user-profile" },
    { key: "2", label: "User Bookings", href: "/user/bookings" },
  ];
  return (
    <div>
      {children}
    </div>
  );
};

export default UserSidebar;
