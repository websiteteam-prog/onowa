import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from './ScrollToTop'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f2ea] text-neutral-800">
      {/* ScrollToTop */}
      <ScrollToTop />
      
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;