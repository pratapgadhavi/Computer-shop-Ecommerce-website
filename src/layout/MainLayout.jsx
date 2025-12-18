import { Outlet } from "react-router-dom";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
