/* eslint-disable @next/next/no-img-element */
import { Button, Col, Row } from "antd";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";

const ProductCard = ({ product }: any) => {
  const { user } = useAppSelector((state) => state.user);
  const { _id, title, images, description, guest, bed } = product;
  return (
    <div className=" mx-auto bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4 text-center">
        <img
          style={{
            width: "100%",
            borderRadius: "10px",
            height: "auto",
          }}
          src={images}
          alt="room image"
        />
        <div className="text-start">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p>{description.slice(0, 100)}</p>
          <div className="flex justify-between item-center">
            <div>
              <h4>{bed} Bed</h4>
            </div>
            <div>
              <h4>{guest} Guest</h4>
            </div>
          </div>
          <div className="text-center">
            {user?.email && (
              <Link href={`/${_id}`}>
                <Button type="primary">Book Now</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
