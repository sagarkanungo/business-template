import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import Button from "../Button/Button.jsx";
import Icon from "../Icon/Icon.jsx";
import siteConfig from "../../config/siteConfig.js";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape and lock page scroll while the mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.classList.add("no-scroll");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  // Reset the menu if the viewport grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className={`header ${scrolled || menuOpen ? "header--solid" : ""}`}>
      <div className="container header__inner">
        <Logo onClick={closeMenu} />

        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "bars"} />
        </button>

        <nav id="primary-nav" className={`header__nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <ul className="header__links">
            {siteConfig.navLinks.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} end={link.path === "/"} className="header__link" onClick={closeMenu}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {siteConfig.headerCta && (
            <Button to={siteConfig.headerCta.path} variant="accent" className="header__cta" onClick={closeMenu}>
              {siteConfig.headerCta.label}
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
