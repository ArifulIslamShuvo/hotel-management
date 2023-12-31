"use client";
import Contents from "@/components/Contents/Contents";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { useAppSelector } from "@/redux/hooks";
import { Button, Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const items = [{ key: "1", label: "Home", href: "/" }];

  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const router = useRouter();


  if (!isLoading) {
    <p>Loading....</p>;
  }

  return (
    <>
      <Layout hasSider>
        <Sidebar />
        <Contents>
          <div
            style={{
              padding: "10px 20px",
            }}
          >
            {children}
          </div>
        </Contents>
      </Layout>
    </>
  );
};

export default DashboardLayout;
