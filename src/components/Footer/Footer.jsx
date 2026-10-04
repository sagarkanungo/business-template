import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import Icon from "../Icon/Icon.jsx";
import siteConfig from "../../config/siteConfig.js";
import services from "../../config/servicesConfig.js";
import { mailLink, telLink } from "../../utils/helpers.js";
import "./Footer.css";

const year = new Date().getFullYear();

function Footer() {
  const footerServices = services.slice(0, siteConfig.footer.servicesLimit);

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>{siteConfig.footer.aboutText}</p>
          {siteConfig.social.length > 0 && (
            <ul className="footer__social" aria-label="Social media">
              {siteConfig.social.map((item) => (
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
                    <Icon name={item.icon} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Quick links">
          <h2 className="footer__title">Quick Links</h2>
          <ul className="footer__list">
            {siteConfig.navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="footer__title">Services</h2>
          <ul className="footer__list">
            {footerServices.map((service) => (
              <li key={service.id}>
                <Link to={`/contact?service=${service.id}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Contact</h2>
          <ul className="footer__contact">
            <li>
              <Icon name="location" />
              <span>{siteConfig.address}</span>
            </li>
            <li>
              <Icon name="phone" />
              <a href={telLink(siteConfig.phone)}>{siteConfig.phone}</a>
            </li>
            <li>
              <Icon name="email" />
              <a href={mailLink(siteConfig.email)}>{siteConfig.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            © {year} {siteConfig.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
