import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a]">
      
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT should take remaining height */}
      <main className="flex-1 flex justify-center items-center">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
