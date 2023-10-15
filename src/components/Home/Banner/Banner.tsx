"use client";
import { Button, Col, Input, Row } from "antd";
import bannerImg from "../../../assets/banner-3.png";
import Image from "next/image";
import Search from "antd/es/input/Search";

const Banner = () => {
  return (
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
