import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import ContactUs from "../pages/ContactForm";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ContactUs/>
      <Footer />
    </>
  );
};

export default MainLayout;
