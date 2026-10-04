import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton.jsx";

/** Scrolls to the top whenever the route changes. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/** Shared page frame: header, page content, footer and floating WhatsApp button. */
function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" className="page">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Layout;
