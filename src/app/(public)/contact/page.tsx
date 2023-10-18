import { RightOutlined } from "@ant-design/icons";
import { Footer } from "antd/es/layout/layout";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <>
    <div>
      <div className="flex justify-center bg-[#D2E0FB] py-10 mt-5">
        <div className="flex justify-between items-center w-full lg:w-[70%] mx-3 lg:m-0 bg-slate-100 px-5 py-3 rounded-xl">
          <h2 className="text-2xl">About Us</h2>
          <div className="flex justify-center items-center gap-3">
            <Link href={"/"}>Home</Link>
            <p>
              <RightOutlined />
            </p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>

    </div>
    <Footer />
  </>
  );
};

export default ContactPage;
