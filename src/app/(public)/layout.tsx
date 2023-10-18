import Navbar from "@/components/ui/Navbar/Navbar";
import PublicHeader from "@/components/view/Header/PublicHeader";
import UserSidebar from "@/components/view/Sidebar/UserSidebar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PublicHeader />
      <>{children}</>
    </div>
  );
};

export default PublicLayout;
