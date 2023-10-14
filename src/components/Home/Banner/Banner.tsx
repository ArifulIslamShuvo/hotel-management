"use client";
import { Col, Input, Row } from "antd";
import bannerImg from "../../../assets/banner.png";
import Image from "next/image";
import Search from "antd/es/input/Search";

const Banner = () => {
    
  return (
    // <div className="banner-section">
    //   <div className="flex flex-col md:flex-row items-center">
    //   <div className="w-full md:w-1/2 text-right">
    //       <Image src={bannerImg} className="w-2/3 h-auto" alt="banner" />
    //     </div>
    //     <div className="w-full md:w-1/2 p-4">
    //       <h1 className="text-5xl font-bold ">
    //         Build Skills With Experts Any Time, Anywhere
    //       </h1>
    //       <p style={{ margin: "15px 0" }}>
    //         We are develop yourself consistently
    //       </p>
    //       <div style={{}}>
    //         <Input placeholder="Search..." />;
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={11} lg={12}>
        <Image src={bannerImg} className="w-2/3 h-auto" alt="banner" />
      </Col>
      <Col sm={12} md={11} lg={8}>
        <h1 className="text-5xl font-bold ">
          Learn From Experts Anywhere, Anytime
        </h1>
        <p style={{ margin: "15px 0" }}>Learn With Tutorials Point,</p>
        <div style={{}}>
          <Search placeholder="Search..." enterButton size="large" />
        </div>
      </Col>
    </Row>
  );
};

export default Banner;
